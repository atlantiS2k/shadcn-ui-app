import { Post, PostComment } from "@/entities/post/types";
import { User } from "@/entities/user";
import { CardTitle } from "@/shared/ui/card";
import { PostCard } from "@/widgets/post-card";
import { PostCommentsList } from "@/widgets/post-comments-list";
import { UserCard } from "@/widgets/user-card";

interface PostsProps {
  post: Post | null;
  comments: PostComment[];
  user: User;
}

export default async function PostPage(props: PostsProps) {
  return (
    <article>
      <h1 className="text-2xl font-bold mb-6 truncate text-center">
        Articles: {props.post?.title}
      </h1>

      <CardTitle className="mt-7 text-center">Blog</CardTitle>

      <div className="border-b my-5" />

      <PostCard articles={props?.post} />

      <CardTitle className="mt-7 text-center">Author</CardTitle>

      <div className="border-b my-5" />

      <UserCard user={props.user} />

      <CardTitle className="mt-7 text-center">Comments</CardTitle>

      <div className="border-b my-5" />

      <PostCommentsList articlesComments={props.comments} />
    </article>
  );
}
