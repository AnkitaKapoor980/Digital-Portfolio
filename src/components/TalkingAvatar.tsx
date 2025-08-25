import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface TalkingAvatarProps {
  autoStart?: boolean;
  className?: string;
}

const TalkingAvatar = ({ autoStart = true, className = "" }: TalkingAvatarProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasAutoStarted = useRef(false);

  const speechText = `Hi, I'm Ankita Kapoor. I'm passionate about creating digital solutions that are not only functional but also intuitive and impactful. My work reflects a balance between technical expertise and creative problem-solving — whether it's building web applications, analyzing data, or designing user experiences.

Professionally, I specialize in building modern, user-focused digital solutions. My portfolio reflects a balance of strong technical skills—ranging from data-driven problem-solving to web development—with an eye for design and usability. Beyond the code, I value collaboration, clear communication, and bringing a positive energy to teams I work with.

What really defines me is my ability to connect ideas, adapt quickly, and keep pushing forward with a mindset of continuous growth. Whether it's exploring new technologies, leading a project, or contributing as part of a team, I aim to create work that's not only functional but meaningful.`;

  const generateTalkingVideo = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // For demo purposes, simulate API call with fallback to static image
      // In production, this would connect to your Supabase Edge Function
      
      // Simulated delay for API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // For now, we'll show an error message suggesting the API setup
      throw new Error('D-ID API integration needed. Please set up the Edge Function for full functionality.');
      
    } catch (error) {
      console.error('Error generating talking avatar:', error);
      setError('Demo mode: Click play to see a speaking animation simulation.');
      
      // Fallback: Show speaking animation on static image
      setTimeout(() => {
        setError(null);
        setIsPlaying(true);
        
        // Simulate speaking duration
        setTimeout(() => {
          setIsPlaying(false);
        }, 30000); // 30 seconds of simulated speaking
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlay = () => {
    if (!videoUrl) {
      generateTalkingVideo();
    } else {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          videoRef.current.play();
          setIsPlaying(true);
        }
      }
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (autoStart && !hasAutoStarted.current) {
      hasAutoStarted.current = true;
      // Auto-start after a short delay to ensure the component is mounted
      const timer = setTimeout(() => {
        generateTalkingVideo();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [autoStart]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => setIsPlaying(false);
      const handlePause = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);

      video.addEventListener('ended', handleEnded);
      video.addEventListener('pause', handlePause);
      video.addEventListener('play', handlePlay);

      return () => {
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('play', handlePlay);
      };
    }
  }, [videoUrl]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence>
        {/* Avatar Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Talking Video or Static Image */}
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
            {videoUrl ? (
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-cover"
                loop={false}
                muted={isMuted}
                playsInline
                onLoadedData={() => {
                  if (videoRef.current && isPlaying) {
                    videoRef.current.play();
                  }
                }}
              />
            ) : (
              <img
                src="/lovable-uploads/ef022c7a-f866-41e4-ad8e-8aae70bcc165.png"
                alt="Ankita Kapoor - AI Avatar"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}

            {/* Loading Overlay */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-white text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"
                  />
                  <p className="text-sm">Generating AI Avatar...</p>
                </div>
              </motion.div>
            )}

            {/* Speaking Indicator */}
            {isPlaying && !isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
                Speaking...
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
              >
                <div className="text-white text-center">
                  <p className="text-sm mb-2">{error}</p>
                  <Button
                    onClick={() => {
                      setError(null);
                      generateTalkingVideo();
                    }}
                    size="sm"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    Try Again
                  </Button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Control Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2"
          >
            <Button
              onClick={handlePlay}
              disabled={isLoading}
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            
            <Button
              onClick={handleMute}
              disabled={!videoUrl || isLoading}
              size="sm"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
          </motion.div>

          {/* Pulsing Ring Effect */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full border-2 border-accent/30"
          />
        </motion.div>
      </AnimatePresence>

      {/* Introduction Banner */}
      <AnimatePresence>
        {(isPlaying || autoStart) && !error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-max"
          >
            <div className="bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm text-sm text-center">
              👋 Hi! I'm Ankita's AI Avatar
            </div>
            <div className="w-3 h-3 bg-black/70 rotate-45 transform translate-x-1/2 -translate-y-2 ml-auto mr-auto"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TalkingAvatar;