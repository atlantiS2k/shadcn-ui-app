import React from "react";
import { HTMLAttributes } from "react";
import { CardTitle } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import { Button } from "@/shared/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { paths } from "@/shared/routes";
import { PostsCarousel, RecentPosts } from "./lazy-components";

export interface ComponentProps extends HTMLAttributes<HTMLElement> {}

const Component = React.memo(() => {
  return (
    <>
      <h1 className="sr-only text-4xl text-center">Welcome to Next.js Blog</h1>

      <section>
        <CardTitle>Articles carousel </CardTitle>
        <Separator className="my-5" />
        <PostsCarousel />
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between">
          <CardTitle>Recent 20 posts</CardTitle>
          <Link
            href={paths.csrArticles}
            className="flex items-center gap-2 group"
          >
            <Button variant="outline">See all</Button>
            <ArrowRight className="size-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <Separator className="my-5" />
        <RecentPosts params={{ perPage: 20, page: 1 }} />
      </section>
    </>
  );
});

Component.displayName = "Component";

export default Component;
