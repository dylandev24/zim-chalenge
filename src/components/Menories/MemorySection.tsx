import { MemoryHeader } from "./MemoryHeader";
import { MemorySwiper } from "./MemorySwiper";

export const MemorySection = () => {
  return (
    <section
      style={{ backgroundColor: "rgb(31 31 31 / 1)" }}
      className="relative min-h-screen py-16 flex flex-col items-center justify-center overflow-hidden transition-colors duration-500"
    >
      <div
        className="absolute left-1/4 top-0 h-1/2 w-0 -rotate-90 pr-[25%] opacity-40 blur-[150px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #b5a2ec 0%, rgba(0, 23, 225, 0.64) 100%)",
          transform: "translate3d(0,0,0)",
        }}
      />

      <div
        className="absolute bottom-0 right-1/4 h-3/4 w-0 bg-red-600 pr-[25%] opacity-20 blur-[130px] pointer-events-none z-0"
        style={{ transform: "translate3d(0,0,0)" }}
      />

      <div className="relative z-10 w-full flex flex-col items-center">
        <MemoryHeader
          title="5700 khoảnh khắc đáng nhớ"
          description="Hàng ngàn khoảnh khắc đáng nhớ về hành trình học tập thú vị luôn được ZIM ghi lại mỗi ngày tại 21 trung tâm Anh Ngữ ZIM trên toàn quốc."
        />

        <div className="w-full ">
          <MemorySwiper />
        </div>
      </div>
    </section>
  );
};
