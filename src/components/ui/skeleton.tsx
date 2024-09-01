import { cn } from "@/lib/utils";

const twStyles = {
  skeleton: "animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800",
};

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(twStyles.skeleton, className)} {...props} />;
}

export { Skeleton };
