import Link from "next/link";
import { Button } from "../ui/button";
import { RiHomeHeartLine } from "react-icons/ri";


const Logo = () => {
  return (
    <Button asChild size='icon'>
      <Link href='/'>
        <RiHomeHeartLine className='w-7 h-7' />
      </Link>
    </Button>
  );
};
export default Logo;
