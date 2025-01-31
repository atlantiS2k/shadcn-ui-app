import { postServices } from "@/entities/post/api/services";
import { PostsList } from "@/widgets/posts-list";
import { PaginationWithLinks } from "@/ui/pagination-with-links";
import { SearchWithLinks } from "@/ui/search-with-links";

interface PostsProps {
  search: Record<string, string | undefined>;
}

export default async function Posts({ search }: PostsProps) {
  const currentPage = parseInt((search.page as string) || "1");
  const postsPerPage = parseInt((search.pageSize as string) || "5");
  const searchValue = (search.search as string) || "";

  const { posts, totalPosts } = await postServices.getPosts({
    page: currentPage,
    perPage: postsPerPage,
    search: { fields: ["title_like"], value: searchValue },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-center">
        Server-Side Rendering Articles
      </h1>

      <div className="mb-5">
        <SearchWithLinks defaultValue={searchValue} />
      </div>

      <PostsList articles={posts} />

      <div className="mt-8">
        <PaginationWithLinks
          page={currentPage}
          pageSize={postsPerPage}
          totalCount={totalPosts}
          pageSizeSelectOptions={{
            pageSizeOptions: [5, 10, 15, 20, 25],
          }}
        />
      </div>
    </div>
  );
}
