import { PostComment } from "@/entities/post/types";
import { Skeleton } from "@/shared/ui/skeleton";
import { getSkeleton } from "@/shared/lib/skeleton";
import { PostCommentCard } from "./post-comment-card";

export interface ArticlesCommentsListProps {
  articlesComments: PostComment[];
}

export function PostCommentsList({
  articlesComments,
}: ArticlesCommentsListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {articlesComments.length > 0 ? (
        articlesComments.map((postComment, index) => (
          <PostCommentCard
            articlesComment={postComment}
            key={postComment.id + index}
            className="aspect-square"
          />
        ))
      ) : (
        <p className="text-gray-500">No comments available.</p>
      )}
    </div>
  );
}

export function PostCommentsListSkeletons({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {getSkeleton(
        count,
        <div className="aspect-square flex flex-col justify-center items-center space-y-2 p-4 shadow-lg border rounded-lg">
          <Skeleton className="w-12 h-12 rounded-full" />
          <Skeleton className="w-3/4 h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-2/3 h-4" />
        </div>
      )}
    </div>
  );
}
