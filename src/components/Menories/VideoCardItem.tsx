import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Pause, Play, Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useHlsVideo } from "../../hooks/useHls";

const ActionButton = React.memo(
  ({ onClick, children, label, isActive }: any) => (
    <button
      onClick={onClick}
      aria-label={label}
      className={`p-2 rounded-full border border-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
        isActive
          ? "bg-orange-500 border-orange-500"
          : "bg-black/70 hover:bg-orange-500"
      }`}
    >
      {children}
    </button>
  )
);

export const VideoCard = React.memo(
  ({ item, isActive, onCardHover, index }: any) => {
    const { videoRef, progress, seek } = useHlsVideo(item.videoUrl);
    const [isLocalHover, setIsLocalHover] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    const userPausedManually = useRef(false);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const sync = async () => {
        video.muted = !isActive;
        setIsMuted(!isActive);

        if ((isActive || isLocalHover) && !userPausedManually.current) {
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

    const togglePlay = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPaused(false);
          userPausedManually.current = false;
        } else {
          videoRef.current.pause();
          setIsPaused(true);
          userPausedManually.current = true;
        }
      },
      [videoRef]
    );

    const toggleMute = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        const newMuted = !videoRef.current.muted;
        videoRef.current.muted = newMuted;
        setIsMuted(newMuted);
      },
      [videoRef]
    );

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
          alt={`Thumbnail of ${item.title}`}
          className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-500 ${
            isLocalHover || isActive ? "opacity-40" : "opacity-100"
          }`}
        />

        <video
          ref={videoRef}
          title={item.title}
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
                onClick={togglePlay}
                label={isPaused ? "Play" : "Pause"}
                isActive={isPaused}
              >
                {isPaused ? (
                  <Play size={14} fill="white" />
                ) : (
                  <Pause size={14} fill="white" />
                )}
              </ActionButton>
              <ActionButton
                onClick={toggleMute}
                label={isMuted ? "Unmute" : "Mute"}
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
            <div className="relative mb-4 h-4 group/progress cursor-pointer flex items-center">
              <div className="relative h-[3px] w-full bg-white/30 rounded-full overflow-visible transition-all group-hover/progress:h-[5px]">
                <div
                  className="absolute inset-y-0 left-0 bg-orange-500 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />

                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={progress}
                  onChange={(e) => seek(parseFloat(e.target.value))}
                  className="absolute inset-0 w-full appearance-none bg-transparent cursor-pointer[&::-webkit-slider-thumb:appearance-none"
                />

                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-orange-400 shadow-md opacity-0 scale-75 transition-all duration-200 group-hover/progress:opacity-100 group-hover/progress:scale-110 group-hover/progress:shadow-lg hover:scale-125 hover:shadow-[0_0_8px_rgba(255,165,0,0.9)] hidden md:block"
                  style={{ left: `calc(${progress}% - 8px)` }}
                />
              </div>
            </div>
          </div>

          <h3 className="font-bold text-lg leading-tight drop-shadow-md">
            {item.title}
          </h3>

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : isLocalHover ? "40px" : "0px",
              opacity: isLocalHover || isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-1 text-[13px] font-medium leading-snug text-white/90">
              {item.description}
            </p>
          </motion.div>

          {isLocalHover && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              aria-expanded={isExpanded}
              className="mt-2 flex items-center gap-1 text-[11px] font-bold uppercase text-orange-400 hover:text-orange-300"
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
