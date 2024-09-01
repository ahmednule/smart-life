"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import React, { useState } from "react";
import NavLinksMenu from "./NavLinksMenu";
import LoginDropdown from "./LoginDropdown";
import MobileNavLinks from "./MobileNavLinks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="fixed w-full flex z-50 bg-transparent/60"
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden text-white"
      />
      <NavbarBrand>
        <span className="text-white text-xl">
          Smart<span className="font-bold text-xl text-emerald-500">LIFE</span>
        </span>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavLinksMenu />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <LoginDropdown />
        </NavbarItem>
      </NavbarContent>
      <MobileNavLinks />
    </Navbar>
  );
};

export default Header;