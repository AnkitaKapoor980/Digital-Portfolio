// D-ID API Integration for Talking Avatar

export interface TalkingAvatarRequest {
  source_url: string;
  script: {
    type: 'text';
    input: string;
    provider?: {
      type: 'elevenlabs';
      voice_id: string;
    };
  };
  config?: {
    fluent?: boolean;
    pad_audio?: number;
    stitch?: boolean;
  };
}

export interface TalkingAvatarResponse {
  id: string;
  status: 'created' | 'started' | 'done' | 'error';
  result_url?: string;
  error?: string;
}

export class DIDApi {
  private apiKey: string;
  private baseUrl = 'https://api.d-id.com';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async createTalkingAvatar(request: TalkingAvatarRequest): Promise<TalkingAvatarResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/talks`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`D-ID API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating talking avatar:', error);
      throw error;
    }
  }

  async getTalkingAvatarStatus(talkId: string): Promise<TalkingAvatarResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/talks/${talkId}`, {
        headers: {
          'Authorization': `Basic ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`D-ID API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting talking avatar status:', error);
      throw error;
    }
  }

  async waitForCompletion(talkId: string, maxWaitTime = 60000): Promise<string> {
    const startTime = Date.now();
    
    while (Date.now() - startTime < maxWaitTime) {
      const status = await this.getTalkingAvatarStatus(talkId);
      
      if (status.status === 'done' && status.result_url) {
        return status.result_url;
      } else if (status.status === 'error') {
        throw new Error(status.error || 'Unknown error occurred');
      }
      
      // Wait 2 seconds before checking again
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    throw new Error('Timeout waiting for talking avatar generation');
  }
}

// Utility function for client-side usage
export async function generateTalkingAvatar(
  imageUrl: string,
  speechText: string,
  voiceId: string = '9BWtsMINqrJLrRacOk9x' // Aria voice by default
): Promise<string> {
  try {
    // This would typically be called from a server-side endpoint
    // to keep the API key secure
    const response = await fetch('/api/generate-talking-avatar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source_url: imageUrl,
        script: {
          type: 'text',
          input: speechText,
          provider: {
            type: 'elevenlabs',
            voice_id: voiceId,
          },
        },
        config: {
          fluent: true,
          pad_audio: 0.0,
          stitch: true,
        },
      }),
    });

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Failed to generate talking avatar');
    }
    
    return data.videoUrl;
  } catch (error) {
    console.error('Error generating talking avatar:', error);
    throw error;
  }
}
