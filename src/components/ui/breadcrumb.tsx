import { Slot } from '@radix-ui/react-slot'
import { CaretRight, DotsThree } from '@phosphor-icons/react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const twStyles = {
  nav: 'mx-auto flex w-full justify-center',
  list: ['flex flex-wrap items-center gap-1.5 break-words text-sm text-foreground-muted', 'sm:gap-2.5'],
  item: 'inline-flex items-center gap-1.5',
  link: 'transition-colors hover:text-foreground',
  page: 'font-normal text-foreground',
  separator: '[&>svg]:size-3.5',
  ellipsis: 'flex h-9 w-9 items-center justify-center',
}

const Breadcrumb = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<'nav'>>(({ ...props }, ref) => (
  <nav ref={ref} aria-label="breadcrumb" {...props} />
))
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, ref) => <ol ref={ref} className={cn(twStyles.list, className)} {...props} />,
)
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn(twStyles.item, className)} {...props} />,
)
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'> & { asChild?: boolean }>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'
    return <Comp ref={ref} className={cn(twStyles.link, className)} {...props} />
  },
)
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(twStyles.page, className)}
      {...props}
    />
  ),
)
BreadcrumbPage.displayName = 'BreadcrumbPage'

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<'li'>) => (
  <li role="presentation" aria-hidden="true" className={cn(twStyles.separator, className)} {...props}>
    {children ?? <CaretRight />}
  </li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span role="presentation" aria-hidden="true" className={cn(twStyles.ellipsis, className)} {...props}>
    <DotsThree className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}
