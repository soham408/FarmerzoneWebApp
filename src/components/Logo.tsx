"use client";
import React from "react";

export default function Logo() {
    return (
      <div className="fixed top-5 w-full flex items-center justify-center z-50">
            <div className="pt-[150px] w-[150px] h-auto sm:w-[300px] md:w-[250px] lg:w-[300px] absolute left-0 rounded-lg bg-opacity-50">
                <img src="LogoF.png" alt="logo" />
            </div>
      </div>
    );
}