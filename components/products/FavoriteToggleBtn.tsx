import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const FavoriteToggleBtn = ({ productId }: { productId: string }) => {
  return (
    <Button variant='outline' size='icon' className='p-2 cursor-pointer'>
      <FaHeart />
    </Button>
  );
};
export default FavoriteToggleBtn;
