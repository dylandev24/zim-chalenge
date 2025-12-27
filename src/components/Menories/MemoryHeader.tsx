interface Props {
  title: string;
  description: string;
}

export const MemoryHeader = ({ title, description }: Props) => (
  <div className="text-center px-4">
    <h2 className="text text-[28px] text-white md:text-4xl font-bold mb-4 tracking-tight">
      {title}
    </h2>
    <p className="text-white text-sm max-w-[600px] mx-auto leading-relaxed">
      {description}
    </p>
  </div>
);
