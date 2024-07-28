import Logo from "./Logo";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import CartButton from "./CartButton";
import NavSearch from "./NavSearch";
import Container from "../global/Container";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className='border-b'>
      <Container className='flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <div className='flex gap-x-2 sm:w-2/3 sm:flex-row sm:justify-between sm:items-center '>
          <Logo />
          <Suspense>
            <NavSearch />
          </Suspense>
        </div>
        <div className='flex items-center gap-4'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
