const Heading = ({
  title,
  desc,
  className,
}: {
  title: string;
  desc?: string;
  className?: string;
}) => {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-[30px] font-bold uppercase text-[#1D2939]">
        {title}
      </h1>
      <p className="text-[#475467] text-[18px]">{desc}</p>
    </div>
  );
};

export default Heading;
