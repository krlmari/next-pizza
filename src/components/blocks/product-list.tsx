import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";

interface ProductListProps {
  title: string;
  items: any[];
  categoryName: number | string;
  className?: string;
  listClassName?: string;
}

export const ProductList: React.FC<ProductListProps> = ({
  className,
  title,
  items,
  categoryName,
  listClassName,
}) => {
  return (
    <div className={cn("", className)}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />

      <div
        className={cn(
          "grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3",
          listClassName
        )}
      >
        {items.map((item) => (
          <ProductCard key={`${categoryName}-${item.id}`} {...item} />
        ))}
      </div>
    </div>
  );
};
