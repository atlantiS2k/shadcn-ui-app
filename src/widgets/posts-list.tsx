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
    <div className="space-y-4">
      {articles.map((articles, index) => (
        <PostCard articles={articles} key={articles.id + index}>
          <div className="w-full flex justify-end p-3">
            <Link href={paths.articles({ postId: articles.id })}>
              <Button>Link to detail page</Button>
            </Link>
          </div>
        </PostCard>
      ))}
    </div>
  );
}

export function PostsListSkeletons({ count }: { count: number }) {
  return (
    <div className="space-y-4">
      {getSkeleton(count, <Skeleton className={cn("w-full h-44")} />)}
    </div>
  );
}
