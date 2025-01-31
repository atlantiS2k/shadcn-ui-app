import React from "react";
import { HTMLAttributes } from "react";
import { CardTitle } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import { Button } from "@/shared/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { paths } from "@/shared/routes";
import { RecentPosts } from "./lazy-components";

const Component = React.memo(() => {
  return (
    <>
      <section className="mt-16">
        <div className="flex items-center justify-center text-center">
          <CardTitle className="text-center">Latest news 15 articles</CardTitle>
        </div>

        <Separator className="my-5" />
        <RecentPosts params={{ perPage: 15, page: 1 }} />
      </section>
    </>
  );
});

Component.displayName = "Component";

export default Component;
