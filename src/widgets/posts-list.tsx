import { Post } from "@/entities/post/types";
import { PostCard } from "./post-card";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/lib/classnames";
import { getSkeleton } from "@/shared/lib/skeleton";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { paths } from "@/shared/routes";

export interface ArticlesListProps {
  articles: Post[];
}

export function PostsList({ articles }: ArticlesListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <PostCard
          articles={article}
          key={article.id + index}
          className="aspect-square"
        >
          <div className="w-full flex justify-center p-3">
            <Link href={paths.articles({ postId: article.id })}>
              <Button variant="default">Link to detail page</Button>
            </Link>
          </div>
        </PostCard>
      ))}
    </div>
  );
}

export function PostsListSkeletons({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {getSkeleton(count, <Skeleton className="aspect-square w-full" />)}
    </div>
  );
}
