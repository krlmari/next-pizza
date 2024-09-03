import { cn } from "@/lib/utils";
import React from "react";
import { Title, FilterCheckbox, CheckboxFilters } from ".";
import { Button, Input, RangeSlider } from "../ui";
import { filters } from "@/content/filters";

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "filters xl:scrollbar-none overflow-hidden xl:sticky xl:top-[100px] xl:max-h-[720px] xl:overflow-y-auto xl:pb-[40px]",
        className
      )}
    >
      <Title text="Фильтрация" size="sm" className="mb-8 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 pb-7 pt-6">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 ml-auto mr-auto flex max-w-[78%] gap-2">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={5000} placeholder="50000" />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFilters
        className="mt-5 flex flex-col gap-4"
        title="Ингредиенты:"
        items={filters}
      />

      <Button className="mt-5 w-[100%]">Применить</Button>
    </div>
  );
};
