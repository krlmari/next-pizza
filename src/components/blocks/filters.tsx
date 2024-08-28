import { cn } from "@/lib/utils";
import React from "react";
import { Title, FilterCheckbox, CheckboxFilters } from ".";
import { Input, RangeSlider } from "../ui";

const FILTERS = [
  { text: "Сырный соус", value: "1" },
  { text: "Моцарелла", value: "2" },
  { text: "Чеснок", value: "3" },
  { text: "Солённые огурцы", value: "4" },
  { text: "Красный лук", value: "5" },
  { text: "Томаты", value: "6" },
];

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-8 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 pb-7 pt-6">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
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
        items={FILTERS}
      />
    </div>
  );
};
