import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  image,
  className,
}) => {
  return (
    <div className={cn("", className)}>
      <Link href="">
        <div className="relative flex h-[260px] justify-center rounded-lg bg-secondary p-6">
          <Image
            className="h-[215px] w-[215px]"
            fill
            src={image}
            alt=""
            objectFit="contain"
          />
        </div>

        <Title text={title} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">{description}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between">
          <span className="text-[20px]">
            от <b>{price}</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
          </Button>
        </div>
      </Link>
    </div>
  );
};
