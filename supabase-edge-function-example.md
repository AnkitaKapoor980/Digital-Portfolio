# D-ID Talking Avatar - Supabase Edge Function Setup

This document shows how to set up the D-ID API integration using Supabase Edge Functions.

## Prerequisites

1. D-ID API key from https://www.d-id.com/
2. Supabase project with Edge Functions enabled
3. ElevenLabs API key (optional, for better voice quality)

## Setup Steps

### 1. Create the Edge Function

```bash
npx supabase functions new generate-talking-avatar
```

### 2. Replace the function code

Create `supabase/functions/generate-talking-avatar/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.208.0/http/server.ts";

const DID_API_KEY = Deno.env.get('DID_API_KEY');
const DID_BASE_URL = 'https://api.d-id.com';

serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const requestData = await req.json();

    if (!DID_API_KEY) {
      throw new Error('D-ID API key not configured');
    }

    // Create talking avatar
    const createResponse = await fetch(`${DID_BASE_URL}/talks`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${DID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!createResponse.ok) {
      const errorData = await createResponse.text();
      throw new Error(`D-ID API error: ${createResponse.status} - ${errorData}`);
    }

    const createData = await createResponse.json();
    const talkId = createData.id;

    // Poll for completion
    let videoUrl = null;
    const maxAttempts = 30;
    let attempts = 0;

    while (attempts < maxAttempts && !videoUrl) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const statusResponse = await fetch(`${DID_BASE_URL}/talks/${talkId}`, {
        headers: {
          'Authorization': `Basic ${DID_API_KEY}`,
        },
      });

      if (!statusResponse.ok) {
        throw new Error(`Status check failed: ${statusResponse.status}`);
      }

      const statusData = await statusResponse.json();
      
      if (statusData.status === 'done' && statusData.result_url) {
        videoUrl = statusData.result_url;
        break;
      } else if (statusData.status === 'error') {
        throw new Error(statusData.error || 'Generation failed');
      }
      
      attempts++;
    }

    if (!videoUrl) {
      throw new Error('Timeout waiting for video generation');
    }

    return new Response(
      JSON.stringify({ success: true, videoUrl, talkId }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
```

### 3. Deploy the function

```bash
npx supabase functions deploy generate-talking-avatar --project-ref YOUR_PROJECT_REF
```

### 4. Set the secret

```bash
npx supabase secrets set DID_API_KEY=your_did_api_key_here --project-ref YOUR_PROJECT_REF
```

### 5. Update the TalkingAvatar component

Replace the API endpoint in `src/components/TalkingAvatar.tsx`:

```typescript
const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/generate-talking-avatar`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
  },
  body: JSON.stringify({
    source_url: 'https://your-domain.com/lovable-uploads/ef022c7a-f866-41e4-ad8e-8aae70bcc165.png',
    script: {
      type: 'text',
      input: speechText,
      provider: {
        type: 'elevenlabs',
        voice_id: '9BWtsMINqrJLrRacOk9x', // Aria voice
      },
    },
    config: {
      fluent: true,
      pad_audio: 0.0,
      stitch: true,
    },
  }),
});
```

## Alternative: HeyGen Integration

For HeyGen instead of D-ID, use their API endpoint:

```typescript
const HEYGEN_API_KEY = Deno.env.get('HEYGEN_API_KEY');
const HEYGEN_BASE_URL = 'https://api.heygen.com/v2';

// Create video
const createResponse = await fetch(`${HEYGEN_BASE_URL}/video/generate`, {
  method: 'POST',
  headers: {
    'X-API-Key': HEYGEN_API_KEY,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    video_inputs: [{
      character: {
        type: 'avatar',
        avatar_id: 'your_avatar_id',
        avatar_style: 'normal'
      },
      voice: {
        type: 'text',
        input_text: speechText,
        voice_id: 'your_voice_id'
      }
    }]
  }),
});
```

## Usage

Once set up, the talking avatar will:
1. Automatically start when the page loads
2. Generate a realistic talking video using your photo
3. Speak the introduction text with natural voice
4. Provide controls for play/pause and mute
5. Show loading states and error handling

The generated videos are cached and can be reused for better performance.