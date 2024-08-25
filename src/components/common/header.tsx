import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from ".";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              Попробуй вкусную пиццу
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} /> Войти
          </Button>

          <div>
            <Button className="group relative">
              <b>0 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />

              <div className="flex items-center gap-1 transition-opacity duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} strokeWidth={2} />
                <b>0</b>
              </div>

              <ArrowRight
                size={16}
                className="absolute right-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
