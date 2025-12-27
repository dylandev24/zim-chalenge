import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Volume2, VolumeX, Play, Pause } from "lucide-react";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useHlsVideo } from "../../hooks/useHls";

const ActionButton = React.memo(({ onClick, children, label }: any) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="p-2 bg-black/60 rounded-full border border-white/10 text-white hover:bg-orange-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
  >
    {children}
  </button>
));

export const VideoCard = React.memo(
  ({ item, isActive, onCardHover, index }: any) => {
    const { videoRef, progress, seek } = useHlsVideo(item.videoUrl);
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLocalHover, setIsLocalHover] = useState(false);

    const shouldLoadVideo = useMemo(
      () => isActive || isLocalHover,
      [isActive, isLocalHover]
    );

    const syncVideoState = useCallback(
      async (shouldPlay: boolean) => {
        const video = videoRef.current;
        if (!video) return;
        try {
          video.muted = isMuted;
          if (shouldPlay) {
            await video.play();
            setIsPaused(false);
          } else {
            video.pause();
            setIsPaused(true);
          }
        } catch (err) {}
      },
      [videoRef, isMuted]
    );

    useEffect(() => {
      syncVideoState(isActive);
    }, [isActive, syncVideoState]);

    return (
      <motion.div
        onMouseEnter={() => {
          setIsLocalHover(true);
          syncVideoState(true);
          onCardHover?.(true);
        }}
        onMouseLeave={() => {
          setIsLocalHover(false);
          setIsExpanded(false);
          syncVideoState(isActive);
          onCardHover?.(false);
        }}
        animate={{ scale: isLocalHover ? 1.02 : 1 }}
        style={{ willChange: "transform" }}
        className="relative overflow-hidden aspect-[9/16] w-[280px] md:w-[410px] rounded-[30px] shadow-2xl cursor-pointer border-2 border-transparent border-b-0 hover:border-b-[0.375rem] hover:border-[#433738] transition-all duration-300"
      >
        <img
          src={item.thumbnail}
          loading={index === 0 ? "eager" : "lazy"}
          alt={item.title}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${
            isLocalHover || isActive ? "opacity-40" : "opacity-100"
          }`}
        />

        {shouldLoadVideo && (
          <video
            ref={videoRef}
            poster={item.thumbnail}
            loop
            playsInline
            muted={isMuted}
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-10"
            style={{
              opacity: isLocalHover || isActive ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          />
        )}

        <div className="absolute inset-x-0 bottom-0 h-2/3 z-20 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

        <AnimatePresence>
          {isLocalHover && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 right-4 z-50 flex gap-2"
            >
              <ActionButton
                onClick={(e: any) => {
                  e.stopPropagation();
                  if (videoRef.current?.paused) videoRef.current.play();
                  else videoRef.current?.pause();
                  setIsPaused(!isPaused);
                }}
                label="Play/Pause"
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
                  setIsMuted(!isMuted);
                  if (videoRef.current) videoRef.current.muted = !isMuted;
                }}
                label="Mute/Unmute"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </ActionButton>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 w-full z-40 p-5 text-white">
          {/* PROGRESS BAR */}
          <motion.div
            animate={{ opacity: isLocalHover ? 1 : 0 }}
            className="relative h-6 flex items-center mb-2"
          >
            <div className="h-[2px] w-full bg-white/30 rounded-full relative">
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
                aria-label="Seek video"
                onChange={(e) => seek(parseFloat(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50"
              />
            </div>
          </motion.div>

          <h3 className="font-bold text-xl leading-tight drop-shadow-md">
            {item.title}
          </h3>

          <motion.div
            animate={{
              height: isExpanded ? "auto" : isLocalHover ? "40px" : "0px",
            }}
            className="overflow-hidden"
          >
            <p className="text-[13px] text-white/90 mt-1 font-light leading-snug">
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
              className="text-[11px] font-bold text-orange-400 mt-2 uppercase flex items-center gap-1"
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
