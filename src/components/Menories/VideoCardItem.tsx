import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Pause, Play, Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useHlsVideo } from "../../hooks/useHls";

const ActionButton = React.memo(({ onClick, children }: any) => (
  <button
    onClick={onClick}
    className="p-2 bg-black/60 rounded-full border border-white/10 text-white hover:bg-orange-500 transition-colors"
  >
    {children}
  </button>
));

export const VideoCard = React.memo(
  ({ item, isActive, onCardHover, index }: any) => {
    const { videoRef, progress, seek } = useHlsVideo(item.videoUrl);
    const [isLocalHover, setIsLocalHover] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const sync = async () => {
        video.muted = !isActive;
        setIsMuted(!isActive);

        if (isActive || isLocalHover) {
          try {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              await playPromise;
              setIsPaused(false);
            }
          } catch (e) {
            video.muted = true;
            video.play().catch(() => {});
          }
        } else {
          video.pause();
          setIsPaused(true);
        }
      };

      sync();
    }, [isActive, isLocalHover]);

    return (
      <motion.div
        onMouseEnter={() => {
          setIsLocalHover(true);
          onCardHover?.(true);
        }}
        onMouseLeave={() => {
          setIsLocalHover(false);
          setIsExpanded(false);
          onCardHover?.(false);
        }}
        animate={{ scale: isLocalHover ? 1.02 : 1 }}
        className="relative aspect-[9/16] w-[280px] md:w-[410px] overflow-hidden rounded-[30px] border-2 border-transparent transition-all duration-300 hover:border-b-[0.375rem] hover:border-[#433738] md:shadow-2xl"
      >
        <img
          src={item.thumbnail}
          loading={index === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-500 ${
            isLocalHover || isActive ? "opacity-40" : "opacity-100"
          }`}
        />

        <video
          ref={videoRef}
          poster={item.thumbnail}
          loop
          playsInline
          className="absolute inset-0 z-10 h-full w-full object-cover"
          style={{ opacity: isLocalHover || isActive ? 1 : 0 }}
        />

        <div className="absolute inset-x-0 bottom-0 z-20 h-2/3 pointer-events-none bg-gradient-to-t from-black via-black/40 to-transparent" />

        <AnimatePresence>
          {isLocalHover && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute right-4 top-4 z-50 flex gap-2"
            >
              <ActionButton
                onClick={(e: any) => {
                  e.stopPropagation();
                  videoRef.current?.paused
                    ? videoRef.current.play()
                    : videoRef.current?.pause();
                  setIsPaused(!isPaused);
                }}
              >
                {isPaused ? (
                  <Play size={14} fill="white" />
                ) : (
                  <Pause size={14} fill="white" />
                )}
              </ActionButton>
              <ActionButton
                onClick={(e: any) => {
                  e.stopPropagation();
                  if (videoRef.current) {
                    videoRef.current.muted = !videoRef.current.muted;
                    setIsMuted(videoRef.current.muted);
                  }
                }}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </ActionButton>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 z-40 w-full p-5 text-white">
          <div
            className={`transition-opacity duration-300 ${
              isLocalHover ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative mb-2 flex h-6 items-center">
              <div className="relative h-[2px] w-full rounded-full bg-white/30">
                <div
                  className="absolute h-full bg-orange-500"
                  style={{ width: `${progress}%` }}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={progress}
                  onChange={(e) => seek(parseFloat(e.target.value))}
                  className="absolute inset-0 z-50 w-full h-full cursor-pointer opacity-0"
                />
              </div>
            </div>
          </div>

          <h3 className="font-bold text-md leading-tight drop-shadow-md">
            {item.title}
          </h3>

          <motion.div
            animate={{
              height: isExpanded ? "auto" : isLocalHover ? "40px" : "0px",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-1 text-[13px] font-light leading-snug text-white/90">
              {item.description}
            </p>
          </motion.div>

          {isLocalHover && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="mt-2 flex items-center gap-1 text-[11px] font-bold uppercase text-orange-400"
            >
              {isExpanded ? "Thu gọn" : "Xem thêm"}
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                <ChevronDown size={12} />
              </motion.div>
            </button>
          )}
        </div>
      </motion.div>
    );
  }
);
