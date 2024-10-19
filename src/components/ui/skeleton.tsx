import { cn } from '@/lib/utils'

const twStyles = {
  skeleton: 'animate-pulse rounded-md bg-gray-100 dark:bg-gray-800',
}

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(twStyles.skeleton, className)} {...props} />
}

export { Skeleton }
