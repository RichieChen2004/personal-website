"use client";

import Image from "next/image";
import styles from "./MusicPlayer.module.css";
import AudioVisualiser from "./AudioVisualiser";

import { useRef, useEffect, useState } from "react";
import { Aldrich } from 'next/font/google';

const aldrich = Aldrich({ subsets: ['latin'], weight: '400' });

export default function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, _] = useState(0.1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const playlist = [
    { title: "Outsider", artist: "Eve", src: "/music/outsider.mp3" },
    { title: "Guitar, Loneliness a...", artist: "kessoku band", src: "/music/bochi.mp3" },
    { title: "Lost Umbrella", artist: "inabakumori", src: "/music/lost_umbrella.mp3" },
    { title: "Usseewa!", artist: "Ado", src: "/music/ado.mp3" },
    { title: "シャルル／バルーン", artist: "須田景凪 バルーン", src: "/music/self_cover.mp3" },
  ]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Keep songs playing if playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play();
    }
  }, [currentSongIndex, isPlaying]);

  // Autoplay when song ends
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => skipSong(-1);

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [currentSongIndex]);

  const toggleExpand = () => {
    setIsTransitioning(true);
    setIsExpanded(!isExpanded);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (audioRef.current) {
      audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
    }
  }

  const skipSong = (skip: number) => {
    setCurrentSongIndex((prev) => {
      const newIndex = (prev + skip + playlist.length) % playlist.length;
      return newIndex;
    });
  }

  return (
    <div>

        {/* Core Music Player Look*/}
        <Image src="/bochi.webp" alt="bochi" className={`${styles.music_icon} ${isExpanded ? styles.expanded : ""}`} width={80} height={80} />
        <AudioVisualiser isPlaying={isPlaying} />
        <div className={`${styles.music_player}`} style={{ width: isExpanded ? 450 : 160 }}></div>

        {/* Song Info */}
        <div className={`${styles.song_info} ${aldrich.className} ${isExpanded ? styles.visible : ""}`}>
          <div className={styles.song_title}>
            {playlist[currentSongIndex].title}
          </div>
          <div className={styles.song_artist}>
            {playlist[currentSongIndex].artist}
          </div>
        </div>

        {/* Music Controls */}
        <div className={`${styles.music_controls} ${isExpanded ? styles.visible : ""}`}>
          <Image onClick={() => skipSong(1)} className={styles.music_backward_button} src="/svg/skip.svg" alt="Play" width={32} height={32} />
          <button onClick={togglePlay} className={styles.music_play_button} >
              <Image src={!isPlaying ? "/svg/play.svg" : "/svg/pause.svg"} alt="Play" width={24} height={24} />
          </button>
          <Image onClick={() => skipSong(-1)} className={styles.music_forward_button} src="/svg/skip.svg" alt="Play" width={32} height={32} />
        </div>
        
        {/* Expand Button */}
        <button
          onClick={toggleExpand} 
          className={`${styles.music_player_expand} ${isExpanded ? styles.expanded : ""} ${isTransitioning ? styles.transitioning : ""}`}
          aria-label={isExpanded ? "Collapse Music Player" : "Expand Music Player"}
        >
          <svg width="22" height="22" viewBox="0 0 32 32">
            {isExpanded ? null : (<line x1="16" y1="6" x2="16" y2="26" stroke="currentColor" strokeWidth="3"/>)}
            <line x1="6" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="3"/>
          </svg>
        </button>

      <audio
        ref={audioRef}
        src={playlist[currentSongIndex].src}
      />

    </div>
  );
}