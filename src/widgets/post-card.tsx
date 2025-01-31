import { Post } from "@/entities/post/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { PropsWithChildren } from "react";
import { cn } from "@/shared/lib/classnames";

export interface ArticlesProps {
  articles: Post | null;
  className?: string;
}

export function PostCard({
  articles,
  children,
  className,
}: PropsWithChildren<ArticlesProps>) {
  return (
    <Card
      key={articles?.id}
      className={cn(
        "transition-all duration-300 hover:scale-105 hover:shadow-xl",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="text-center">{articles?.title}</CardTitle>
      </CardHeader>
      <CardContent>{articles?.body}</CardContent>
      {children}
    </Card>
  );
}
