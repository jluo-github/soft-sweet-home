"use client";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      {adminLinks.map((link) => {
        const isActive = pathname === link.href;
        const variant = isActive ? "default" : "ghost";

        return (
          <Button
            asChild
            variant={variant}
            key={link.href}
            className='w-full capitalize font-normal mb-2 justify-start'>
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </>
  );
};
export default Sidebar;
