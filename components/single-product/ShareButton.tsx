"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { LuShare2 } from "react-icons/lu";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
} from "react-share";

const ShareButton = ({
  productId,
  name,
}: {
  productId: string;
  name: string;
}) => {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/products/${productId}`;

  return (
    <Popover>
      {/* trigger */}
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon' className='p-2'>
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      {/* content  */}
      <PopoverContent
        side='top'
        align='end'
        sideOffset={10}
        className='flex items-center gap-x-2 justify-center w-full'>
        {/* share buttons */}
        <FacebookShareButton url={shareLink}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={shareLink} title={name}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareLink} subject={name}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
};
export default ShareButton;
