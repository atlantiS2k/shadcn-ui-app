import { PostComment } from "@/entities/post/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { cn } from "@/shared/lib/classnames";

export interface ArticlesCommentCardProps {
  articlesComment: PostComment;
  className?: string;
}

export function PostCommentCard({
  articlesComment,
  className,
}: ArticlesCommentCardProps) {
  return (
    <Card
      key={articlesComment.id}
      className={cn(
        "shadow-lg border rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl",
        className
      )}
    >
      <CardHeader className="flex items-center space-x-4">
        <CardTitle className="text-lg font-semibold">
          {articlesComment.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>{articlesComment.body}</p>
      </CardContent>
    </Card>
  );
}
