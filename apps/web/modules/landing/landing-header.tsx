import type { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@workspace/ui/components/button";

import { ModeToggle } from "@/components/mode-toggle";

export type LandingHeaderProps = {
  isAuth: boolean;
};

export const LandingHeader: FC<LandingHeaderProps> = (props) => {
  const { isAuth } = props;

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/icon0.svg"
            alt="logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="font-bold text-xl">Astrarium</span>
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <nav className="hidden md:flex items-center space-x-6 ml-4">
            <Link
              href="#features"
              className="text-sm hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#tech-stack"
              className="text-sm hover:text-primary transition-colors"
            >
              Visit Your Pet
            </Link>
            <Link
              href="#docs"
              className="text-sm hover:text-primary transition-colors"
            >
              Practice
            </Link>
            {isAuth ? (
              <Button variant="outline" size="sm">
                <Link href="/private">Dashboard</Link>
              </Button>
            ) : (
              <Button size="sm">
                <Link href="/login">Get Started</Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
