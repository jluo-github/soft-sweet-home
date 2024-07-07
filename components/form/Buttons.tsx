"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuTrash2, LuPenSquare } from "react-icons/lu";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

type ActionType = "delete" | "edit";

export const IconButton = ({ actionType }: { actionType: ActionType }) => {
  const { pending } = useFormStatus();

  const handleIcon = () => {
    switch (actionType) {
      case "delete":
        return <LuTrash2 className='h-5 w-5' />;
      case "edit":
        return <LuPenSquare className='h-5 w-5' />;
      default:
        const iconError: never = actionType;
        throw new Error(`Invalid action type: ${iconError}`);
    }
  };

  return (
    <Button
      type='submit'
      size='icon'
      variant='link'
      className='cursor-pointer p-2'>
      {pending ? <ReloadIcon /> : handleIcon()}
    </Button>
  );
};

const Buttons = ({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      disabled={pending}
      size={size}
      className={cn("capitalize", className)}>
      {pending ? (
        <>
          <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
          Please wait
        </>
      ) : (
        text
      )}
    </Button>
  );
};
export default Buttons;
