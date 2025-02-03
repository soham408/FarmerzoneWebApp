"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { div } from "motion/react-client";
import logo from "public/logo.png"
import Link from "next/link";


export default function NavbarDemo() {
    return (
      
      <div className="fixed w-auto top-0 right-0 z-50 bg-white dark:bg-black shadow-md">
        <Navbar />
      
      </div>
    );
  }
   
  function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
      className={cn("fixed top-10 inset-x-0 max-w-[250px] mx-auto z-50 text-[19px]", className)}>
           
        <Menu setActive={setActive} >
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={'#'} item="Home">
        </MenuItem>
        </Link>

          <Link href={"/Products"}> 
          <MenuItem setActive={setActive} active={'#'} item="Products">
          </MenuItem>
          </Link>

          
          <Link href={"/ContactUs"}>
          <MenuItem setActive={setActive} active={'#'} item="Contact">
          </MenuItem>
          </Link>
         
        </Menu>
      </div>
    );
  }