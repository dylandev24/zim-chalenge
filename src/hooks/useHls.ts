import { useEffect, useRef, useState, useCallback } from "react";
import Hls from "hls.js";

export const useHlsVideo = (url: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration)
        setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !url) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        maxBufferLength: 10,
        maxBufferSize: 5 * 1024 * 1024, // 5MB
        enableWorker: true,
      });
      hls.loadSource(url);
      hls.attachMedia(video);
      hlsRef.current = hls;
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
      video.src = "";
    };
  }, [url]);

  const seek = useCallback((percent: number) => {
    if (videoRef.current?.duration) {
      videoRef.current.currentTime =
        (percent / 100) * videoRef.current.duration;
    }
  }, []);

  return { videoRef, progress, seek };
};
