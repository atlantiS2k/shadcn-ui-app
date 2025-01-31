"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import { paths } from "@/shared/routes";
import { postQueries } from "@/entities/post/api/queries";
import { PostCarouselCard } from "./post-carousel-card";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { useScreenSize, ScreenSize } from "@/shared/lib/hooks/use-screen";

export default function PostsCarousel() {
  const screenSize = useScreenSize();
  const getPostsQuery = postQueries.useFetchPosts({});
  const { data } = getPostsQuery;

  const isMobile = screenSize === ScreenSize.Mobile;

  const shouldShowNavigation = !isMobile;

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data?.posts.map((item, index) => (
          <Link href={paths.articles({ postId: item.id })}>
            <CarouselItem
              key={index}
              className="basis-1/1 mobile:basis-1/2 md:basis-1/4"
            >
              <PostCarouselCard
                data={item}
                cardClassName="w-full max-w-60 mobile:max-w-xl"
              >
                <Button className="w-full">Link to detail page</Button>
              </PostCarouselCard>
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>

      {shouldShowNavigation && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
