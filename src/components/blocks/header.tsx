import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from ".";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={cn("border-b", className)}>
      <Container className="flex flex-wrap items-center justify-between gap-4 py-8">
        <div className="flex items-center gap-4">
          <Image src="/next-pizza/logo.png" alt="Logo" width={35} height={35} />
          {/* <Image src="/logo.png" alt="Logo" width={35} height={35} /> */}
          <div>
            <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">
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
              <span className="mx-3 h-full w-[1px] bg-white/30" />

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
