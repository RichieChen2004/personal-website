"use client";

import { useEffect, useState } from "react";
import styles from "./AudioVisualiser.module.css";

export default function AudioVisualiser({ isPlaying }: { isPlaying: boolean }) {
  const rectCount = 3;
  const rectWidth = 4;
  const gap = 4;
  const baseLeft = 124;

  const [durations, setDurations] = useState<number[]>([]);

  useEffect(() => {
    setDurations(Array.from({ length: rectCount }, () => 0.5 + Math.random()));
  }, [rectCount]);

  return (
    <div className={styles.visualizer}>
      {durations.map((d, i) => (
        <div
          key={i}
          className={`${styles.rect} ${isPlaying ? styles.playing : ""}`}
          style={{
            left: `${baseLeft + i * (rectWidth + gap)}px`,
            animationDuration: `${d}s`,
          }}
        />
      ))}
    </div>
  );
}
