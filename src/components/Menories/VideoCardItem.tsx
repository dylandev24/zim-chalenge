import { motion } from "framer-motion";
import { ChevronDown, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { useHlsVideo } from "../../hooks/useHls";

const ActionButton = ({ onClick, children, label }: any) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="p-2 bg-black/60 rounded-full border border-white/10 text-white hover:bg-orange-500 transition-colors active:scale-90"
  >
    {children}
  </button>
);

export const VideoCard = ({ item, isActive, onCardHover }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { videoRef, progress, seek } = useHlsVideo(item.videoUrl);

  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHoverProgress, setIsHoverProgress] = useState(false);
  const [isLocalHover, setIsLocalHover] = useState(false);

  const syncVideoState = useCallback(
    async (shouldPlay: boolean, muted: boolean) => {
      const video = videoRef.current;
      if (!video) return;

      try {
        video.muted = muted;
        setIsMuted(muted);

        if (shouldPlay) {
          await video.play();
          setIsPaused(false);
        } else {
          video.pause();
          setIsPaused(true);
        }
      } catch (err) {
        if (shouldPlay) {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        }
      }
    },
    [videoRef]
  );

  useEffect(() => {
    syncVideoState(isActive, true);
  }, [isActive, syncVideoState]);

  const handleMouseEnter = () => {
    setIsLocalHover(true);
    syncVideoState(true, false);
    onCardHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsLocalHover(false);
    setIsExpanded(false);
    syncVideoState(isActive, true);
    onCardHover?.(false);
  };

  const togglePlay = (e: any) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const toggleMute = (e: any) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const m = !videoRef.current.muted;
    videoRef.current.muted = m;
    setIsMuted(m);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: isLocalHover ? 1.02 : 1,
        borderColor: isLocalHover ? "#433738" : "transparent",
      }}
      style={{ willChange: "transform" }}
      className="relative hover:border-b-[0.375rem] border-b-0 border-2 overflow-hidden aspect-[9/16] w-[280px] md:w-[410px] rounded-[30px] transition-all duration-300 shadow-2xl cursor-pointer bg-black"
    >
      <motion.img
        src={item.thumbnail}
        loading="lazy"
        alt={item.title}
        animate={{ opacity: isLocalHover || isActive ? 0 : 0.8 }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <video
        ref={videoRef}
        poster={item.thumbnail}
        loop
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{
          opacity: isLocalHover || isActive ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-1/2 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      <motion.div
        animate={{ opacity: isLocalHover ? 1 : 0, y: isLocalHover ? 0 : -10 }}
        className="absolute top-4 right-4 z-50 flex gap-2"
      >
        <ActionButton
          onClick={togglePlay}
          label={isPaused ? "Play video" : "Pause video"}
        >
          {isPaused ? (
            <Play className="pointer-events-none" size={14} fill="white" />
          ) : (
            <Pause className="pointer-events-none" size={14} fill="white" />
          )}
        </ActionButton>
        <ActionButton onClick={toggleMute} label={isMuted ? "Unmute" : "Mute"}>
          {isMuted ? (
            <VolumeX className="pointer-events-none" size={14} />
          ) : (
            <Volume2 className="pointer-events-none" size={14} />
          )}
        </ActionButton>
      </motion.div>

      <div className="absolute bottom-0 w-full z-40 p-5 text-white">
        <motion.div
          animate={{ opacity: isLocalHover ? 1 : 0 }}
          className="relative h-6 flex items-center mb-2"
          onMouseEnter={() => setIsHoverProgress(true)}
          onMouseLeave={() => setIsHoverProgress(false)}
        >
          <div className="h-[2px] w-full bg-white/20 rounded-full relative">
            <motion.div
              className="absolute h-full bg-orange-500"
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"
              animate={{
                scale: isHoverProgress ? 1 : 0,
                left: `calc(${progress}% - 6px)`,
              }}
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

        <h3 className="font-bold text-lg leading-tight drop-shadow-sm">
          {item.title}
        </h3>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : isLocalHover ? "38px" : "0px",
            opacity: isExpanded || isLocalHover ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <p className="text-[12px] text-white/80 leading-snug mt-1 font-light">
            {item.description}
          </p>
        </motion.div>

        {(isLocalHover || isExpanded) && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            aria-expanded={isExpanded}
            className="text-[10px] font-bold text-orange-500 mt-2 uppercase flex items-center gap-1"
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
};
