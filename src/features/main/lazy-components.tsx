import dynamic from "next/dynamic";

export const RecentPosts = dynamic(() => import("./recent-posts"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
