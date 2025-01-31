import { PostComment } from "@/entities/post/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

export interface ArticlesCommentCardProps {
  articlesComment: PostComment;
}

export function PostCommentCard({ articlesComment }: ArticlesCommentCardProps) {
  return (
    <Card key={articlesComment.id}>
      <CardHeader>
        <CardTitle>{articlesComment.name}</CardTitle>
      </CardHeader>
      <CardContent>{articlesComment.body}</CardContent>
    </Card>
  );
}
