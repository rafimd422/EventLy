"use client"
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";
import menu from '@/public/assets/icons/menu.svg'
import logo from '@/public/assets/images/logo.svg'
import { Separator } from "@radix-ui/react-separator";
import NavItems from "./NavItems";
const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
            <Image
            src={menu}
            width={24}
            height={24}
            alt="menu"
            className="cursor-pointer"
            />
        </SheetTrigger>
        <SheetContent className="flex flex-col md:hidden bg-white gap-6">
<Image
src={logo}
alt="logo"
width={128}
height={38}
/>
<Separator className="border border-gray-50" />
<NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
