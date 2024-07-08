"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Comment = ({ comment }: { comment: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const longComment = comment.length > 100;
  const displayComment =
    longComment && !isExpanded ? `${comment.slice(0, 100)}...` : comment;

  return (
    <>
      <p className='text-sm'>{displayComment}</p>

      {longComment && (
        <Button
          onClick={toggleExpand}
          variant='link'
          className='pl-0 text-muted-foreground'>
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </>
  );
};
export default Comment;
