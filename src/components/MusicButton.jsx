import { useState, useRef } from "react";
import pauseIcon from '../assets/pause.svg';
import playIcon from '../assets/play.svg'

function AudioPlayer({ src }) {
  // 1. Create a ref for the audio element and a state for playing status
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle play/pause toggle
  const togglePlayPause = () => {
    const audio = audioRef.current;
    
    if (isPlaying) {
      audio.pause(); // Pause the audio if playing
    } else {
        console.log(audio)
      audio.play(); // Play the audio if paused
    }
    setIsPlaying(!isPlaying); // Toggle the state
  };

  return (
    <div className="fixed-top-right">
      {/* The audio element with the ref attached */}
      <audio ref={audioRef} src={src} preload="auto" />

      {/* Button to control play/pause */}
      <button className="play-pause" onClick={togglePlayPause}>
        <img className='icon' src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" /> Lavender Town Theme
      </button>
    </div>
  );
}

export default AudioPlayer;