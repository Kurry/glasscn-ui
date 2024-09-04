"use client";

import { ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export type ComboBoxOption = {
  value: string;
  label: React.ReactNode;
  keywords: string;
};

export type ComboBoxProps = {
  className?: string;
  triggerClassName?: string;
  onSelect?: (value: string | undefined) => void;
  options: ComboBoxOption[];
  placeholder?: string;
  defaultValue?: string;
  deselectable?: boolean;
  disabled?: boolean;
  children?: never;
  emptyText?: React.ReactNode;
};

export function ComboBox({
  className,
  triggerClassName,
  onSelect,
  options = [],
  deselectable,
  defaultValue,
  disabled,
  emptyText = "No results found.",
  placeholder = "Select an option",
}: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string | undefined>(defaultValue);

  React.useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const selectedOption = value
    ? options.find((opt) => opt.value === value)
    : undefined;
  const label = selectedOption?.label ?? placeholder;
  const labelText = selectedOption?.keywords ?? placeholder;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          disabled={disabled}
          aria-expanded={open}
          className={cn("min-w-[200px] justify-between", triggerClassName)}
        >
          <span
            title={labelText}
            className="block max-w-full overflow-hidden break-words"
          >
            {label}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("min-w-[200px] p-0", className)}>
        <Command
          vimBindings={false}
          // disablePointerSelection
          filter={(value, search, keywords) => {
            const extendValue = `${value} ${(keywords ?? []).join(" ")}`
              .toLowerCase()
              .replace(/[\s]/g, "");
            if (extendValue.includes(search.toLowerCase().replace(/[\s]/g, "")))
              return 1;
            return 0;
          }}
          onValueChange={(newValue) => {
            const deselectableValue = newValue === value ? undefined : newValue;
            const actualValue = deselectable ? deselectableValue : newValue;

            setValue(actualValue);
            setOpen(false);
            onSelect?.(actualValue);
          }}
          defaultValue={defaultValue}
        >
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.value}
                  keywords={opt.keywords.split(" ")}
                  className={cn(
                    {
                      "!bg-primary-600 hover:!bg-primary-500 !text-white":
                        opt.value === value,
                    },
                    "mx-2 mb-2",
                  )}
                  onSelect={(currentValue) => {
                    const deselectableValue =
                      currentValue === value ? undefined : currentValue;
                    const actualValue = deselectable
                      ? deselectableValue
                      : currentValue;

                    setValue(actualValue);
                    setOpen(false);
                    onSelect?.(actualValue);
                  }}
                >
                  {opt.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
