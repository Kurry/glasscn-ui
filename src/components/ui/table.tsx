import * as React from "react";

import { cn } from "@/lib/utils";

const twStyles = {
  table: "w-full caption-bottom text-sm",
  tableHeader: "[&_tr]:border-b",
  tableBody: "[&_tr:last-child]:border-0",
  tableFooter: [
    "border-t bg-gray-100/50 font-medium [&>tr]:last:border-b-0",
    "dark:bg-gray-800/50",
  ],
  tableRow: [
    "border-b transition-colors hover:bg-gray-100/50 data-[state=selected]:bg-gray-100",
    "dark:hover:bg-gray-800/50 dark:data-[state=selected]:bg-gray-800",
  ],
  tableHead: [
    "h-12 px-4 text-left align-middle font-medium text-neutral-500",
    "[&:has([role=checkbox])]:pr-0 dark:text-neutral-400",
  ],
  tableCell: "p-4 align-middle [&:has([role=checkbox])]:pr-0",
  tableCaption: "mt-4 text-sm text-neutral-500 dark:text-neutral-400",
  tableWrapper: "relative w-full overflow-auto",
};

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className={cn(twStyles.tableWrapper)}>
    <table ref={ref} className={cn(twStyles.table, className)} {...props} />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn(twStyles.tableHeader, className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn(twStyles.tableBody, className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={cn(twStyles.tableFooter, className)} {...props} />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr ref={ref} className={cn(twStyles.tableRow, className)} {...props} />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={cn(twStyles.tableHead, className)} {...props} />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={cn(twStyles.tableCell, className)} {...props} />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(twStyles.tableCaption, className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
