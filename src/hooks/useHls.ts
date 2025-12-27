import { useEffect, useRef, useState, useCallback } from "react";
import Hls from "hls.js";

export const useHlsVideo = (url: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const requestRef = useRef<number | null>(null);

  const updateProgress = useCallback(() => {
    const video = videoRef.current;
    if (video && video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
    requestRef.current = requestAnimationFrame(updateProgress);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !url) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxBufferLength: 10,
        maxBufferSize: 30 * 1000 * 1000,
        enableWorker: true,
      });
      hls.loadSource(url);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    }

    requestRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (hls) {
        hls.detachMedia();
        hls.destroy();
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      video.src = "";
    };
  }, [url, updateProgress]);

  const seek = (percent: number) => {
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime =
        (percent / 100) * videoRef.current.duration;
      setProgress(percent);
    }
  };

  return { videoRef, progress, seek };
};
