const Price = ({
  amount,
  className,
}: {
  amount: number;
  className?: string;
} & React.ComponentProps<"p">) => (
  <span className={className}>₮{amount.toLocaleString()}</span>
);

export default Price;
