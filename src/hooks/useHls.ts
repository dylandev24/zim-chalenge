import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

export const useHlsVideo = (url: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !url) return;

    let hls: Hls;
    if (Hls.isSupported()) {
      hls = new Hls({ maxBufferLength: 5 });
      hls.loadSource(url);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    }

    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      hls?.destroy();
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [url]);

  const seek = (percent: number) => {
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime =
        (percent / 100) * videoRef.current.duration;
      setProgress(percent);
    }
  };

  return { videoRef, progress, seek };
};
