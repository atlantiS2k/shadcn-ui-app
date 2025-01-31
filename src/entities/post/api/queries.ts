"use client";
import { useQuery } from "@tanstack/react-query";
import { postServices } from "./services";
import { API_END_POINTS } from "@/shared/lib/end-points";
import { GetPostsParams } from "@/shared/lib/end-points/post";

const useFetchPosts = (queryParams: GetPostsParams) => {
  const key = [API_END_POINTS.post.getPosts(queryParams)];

  const queryResult = useQuery({
    queryKey: key,
    queryFn: async () => {
      return await postServices.getPosts(queryParams);
    },
  });

  return {
    ...queryResult,
    data: queryResult.data,
    queryKey: key,
  };
};

const postQueries = {
  useFetchPosts,
};

export { postQueries };
