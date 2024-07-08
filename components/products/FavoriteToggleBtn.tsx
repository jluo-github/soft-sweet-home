import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { FavoriteSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleBtn = async ({ productId }: { productId: string }) => {
  const { userId } = auth();
  if (!userId) return <FavoriteSignInButton />;

  const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
};

export default FavoriteToggleBtn;
