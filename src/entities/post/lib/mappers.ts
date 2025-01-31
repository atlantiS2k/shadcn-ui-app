import { Articles, ArticlesComment } from "../types";

const mapPost = (post: Partial<Articles>): Articles => {
  return {
    body: post?.body || "",
    title: post?.title || "",
    id: post?.id || 0,
    userId: post?.userId || 0,
  };
};

const mapPostComment = (
  postComment: Partial<ArticlesComment>
): ArticlesComment => {
  const { title, ...mappedPost } = mapPost(postComment);
  return {
    ...mappedPost,
    postId: postComment?.postId || 0,
    name: postComment?.name || "",
  };
};

const postMappers = { mapPost, mapPostComment };
export { postMappers };
