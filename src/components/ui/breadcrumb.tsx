import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  nav: "mx-auto flex w-full justify-center",
  list: [
    "flex flex-wrap items-center gap-1.5 break-words text-sm text-neutral-500",
    "sm:gap-2.5 dark:text-neutral-400",
  ],
  item: "inline-flex items-center gap-1.5",
  link: "transition-colors hover:text-neutral-950 dark:hover:text-neutral-50",
  page: "font-normal text-neutral-950 dark:text-neutral-50",
  separator: "[&>svg]:size-3.5",
  ellipsis: "flex h-9 w-9 items-center justify-center",
};

const Breadcrumb = ({ ref, ...props }: React.ComponentPropsWithRef<"nav">) => (
  <nav ref={ref} aria-label="breadcrumb" {...props} />
);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"ol">) => (
  <ol ref={ref} className={cn(twStyles.list, className)} {...props} />
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"li">) => (
  <li ref={ref} className={cn(twStyles.item, className)} {...props} />
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = ({
  ref,
  asChild,
  className,
  ...props
}: React.ComponentPropsWithRef<"a"> & {
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot : "a";

  return <Comp ref={ref} className={cn(twStyles.link, className)} {...props} />;
};
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithRef<"span">) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn(twStyles.page, className)}
    {...props}
  />
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn(twStyles.separator, className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn(twStyles.ellipsis, className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
