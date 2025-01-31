import { Post } from "@/entities/post/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { PropsWithChildren } from "react";

export interface ArticlesProps {
  articles: Post | null;
}

export function PostCard({
  articles,
  children,
}: PropsWithChildren<ArticlesProps>) {
  return (
    <Card key={articles?.id}>
      <CardHeader>
        <CardTitle>{articles?.title}</CardTitle>
      </CardHeader>
      <CardContent>{articles?.body}</CardContent>
      {children}
    </Card>
  );
}
