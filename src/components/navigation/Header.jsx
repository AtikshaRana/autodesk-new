"use client";

import MainNav from "@/components/navigation/MainNav";
import UpperNav from "@/components/navigation/UpperNav";
import Styles from "@/components/navigation/header.module.css";
import { useState } from "react";

export default function Header({ alternates, blok }) {
  const [isOpen, setOpen] = useState(0);
  const burgerHandler = (url) => {
    isOpen === 0 ? setOpen(1) : setOpen(0);
  };

  return (
    <header className={Styles.header}>
      <UpperNav
        alternates={alternates}
        blok={blok}
        burgerHandler={burgerHandler}
      />
      <div className="mainNavWrap">
        <MainNav alternates={alternates} blok={blok} isOpen={isOpen} />
      </div>
    </header>
  );
}
