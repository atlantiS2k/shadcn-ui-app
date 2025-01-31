import dynamic from "next/dynamic";

export const PostsCarousel = dynamic(() => import("./posts-carousel"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export const RecentPosts = dynamic(() => import("./recent-posts"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
