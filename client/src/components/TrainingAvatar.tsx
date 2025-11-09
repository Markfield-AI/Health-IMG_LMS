import { useState, useEffect } from "react";
import avatarImage from "@assets/generated_images/NHS_training_avatar_instructor_a5fd4e89.png";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrainingAvatarProps {
  isSpeaking?: boolean;
  speechText?: string;
  onSpeechComplete?: () => void;
}

export default function TrainingAvatar({ isSpeaking = false, speechText, onSpeechComplete }: TrainingAvatarProps) {
  const [isTTSEnabled, setIsTTSEnabled] = useState(true);
  const [currentlySpeaking, setCurrentlySpeaking] = useState(false);
  const [ukFemaleVoice, setUkFemaleVoice] = useState<SpeechSynthesisVoice | null>(null);

  // Load and select UK female voice
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        
        // Try to find a UK female voice
        // Priority: Google UK English Female > any en-GB female > any en-GB > fallback
        const ukFemale = voices.find(voice => 
          voice.lang === 'en-GB' && (
            voice.name.toLowerCase().includes('female') ||
            voice.name.toLowerCase().includes('hazel') ||
            voice.name.toLowerCase().includes('serena')
          )
        ) || voices.find(voice => voice.lang === 'en-GB') || voices[0];
        
        setUkFemaleVoice(ukFemale);
      };

      // Voices may load asynchronously
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  useEffect(() => {
    if (isSpeaking && speechText && isTTSEnabled && 'speechSynthesis' in window) {
      setCurrentlySpeaking(true);
      const utterance = new SpeechSynthesisUtterance(speechText);
      
      // Set UK female voice if available
      if (ukFemaleVoice) {
        utterance.voice = ukFemaleVoice;
      }
      
      utterance.lang = 'en-GB'; // UK English
      utterance.rate = 1.2;
      utterance.pitch = 1.1; // Slightly higher pitch for more natural female voice
      utterance.onend = () => {
        setCurrentlySpeaking(false);
        onSpeechComplete?.();
      };
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  }, [isSpeaking, speechText, isTTSEnabled, onSpeechComplete, ukFemaleVoice]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className={`w-64 h-64 rounded-full overflow-hidden border-4 border-primary ${currentlySpeaking ? 'ring-4 ring-primary/30 animate-pulse' : ''}`}>
          <img 
            src={avatarImage} 
            alt="NHS Training Instructor"
            className="w-full h-full object-cover"
          />
        </div>
        {currentlySpeaking && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsTTSEnabled(!isTTSEnabled)}
          data-testid="button-toggle-speech"
        >
          {isTTSEnabled ? (
            <Volume2 className="w-4 h-4 mr-2" />
          ) : (
            <VolumeX className="w-4 h-4 mr-2" />
          )}
          <span className="text-sm">{isTTSEnabled ? 'Voice On' : 'Voice Off'}</span>
        </Button>
      </div>
    </div>
  );
}
