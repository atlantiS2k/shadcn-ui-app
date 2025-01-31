import { PostComment } from "@/entities/post/types";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/lib/classnames";
import { getSkeleton } from "@/shared/lib/skeleton";
import { PostCommentCard } from "./post-comment-card";

export interface ArticlesCommentsListProps {
  articlesComments: PostComment[];
}

export function PostCommentsList({
  articlesComments,
}: ArticlesCommentsListProps) {
  return (
    <div className="space-y-4">
      {articlesComments.map((postComment, index) => (
        <PostCommentCard
          articlesComment={postComment}
          key={postComment.id + index}
        />
      ))}
    </div>
  );
}

export function PostCommentsListSkeletons({ count }: { count: number }) {
  return (
    <div className="space-y-4">
      {getSkeleton(count, <Skeleton className={cn("w-full h-44")} />)}
    </div>
  );
}
