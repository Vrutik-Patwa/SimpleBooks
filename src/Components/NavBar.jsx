import React from "react";
import { MdDarkMode } from "react-icons/md";
import { PiSunLight } from "react-icons/pi";
import Logo from "./Logo";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Divider,
} from "@nextui-org/react";
import { TbSun } from "react-icons/tb";

const NavBar = (props) => {
  return (
    <div>
      <Navbar className="h-18">
        <NavbarBrand>
          {/* <Logo /> */}
          {/* <div>
            <img src="public\images\image-removebg-preview (2).png" alt="" />
          </div> */}
          <p className="font-bold text-inherit">SimpleBooks</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Inventory
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Invoices
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Pricing
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem> */}
          <NavbarItem className="lg:flex">
            <Link href="/signin">
              <Button color="primary" href="#" variant="flat">
                Sign In
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            {props.mode ? (
              <MdDarkMode className="size-6" onClick={props.theme} />
            ) : (
              <PiSunLight onClick={props.theme} className="size-6" />
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Divider className="my-0" />
    </div>
  );
};

export default NavBar;
