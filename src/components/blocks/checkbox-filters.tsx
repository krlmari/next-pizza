"use client";

import { cn } from "@/lib/utils";
import React, { ChangeEvent, useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { debounce } from "lodash";

interface CheckboxFiltersProps {
  title: string;
  items: FilterChecboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string;
  className?: string;
}

export const CheckboxFilters: React.FC<CheckboxFiltersProps> = ({
  title,
  items,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  // onChange,
  // defaultValue,
  className,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [list, setList] = useState(items);

  const onChangeSearchInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setList(items.filter((item) => item.text.toLowerCase().includes(value)));
  }, 300);

  return (
    <div className={cn("", className)}>
      <p className="mb-3 font-bold">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="border-none bg-gray-50"
            onChange={onChangeSearchInput}
          />
        </div>
      )}

      <div className="scrollbar flex max-h-80 flex-col gap-4 overflow-auto pr-2">
        {(showAll ? list : items.slice(0, limit)).map((item) => (
          <FilterCheckbox
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(v) => console.log(v)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={"border-b border-b-neutral-100 pb-4"}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-primary"
          >
            {showAll ? "Скрыть" : "+ Показать всё"}
          </button>
        </div>
      )}
    </div>
  );
};
