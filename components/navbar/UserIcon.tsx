import { LuUser2 } from "react-icons/lu";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const UserIcon = async () => {
  // clerk user id:
  const { userId } = auth();
  // clerk user data:
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt='profile image'
        className='w-6 h-6 rounded-full object-cover'
        width={24}
        height={24}
      />
    );
  }

  return <LuUser2 className='w-6 h-6 bg-primary rounded-full text-white' />;
};
export default UserIcon;
