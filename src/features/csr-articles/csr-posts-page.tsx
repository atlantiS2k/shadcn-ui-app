"use client";
import { PostsList, PostsListSkeletons } from "@/widgets/posts-list";
import { useEffect } from "react";
import { SearchBar } from "@/shared/ui/search-bar";
import { Button } from "@/shared/ui/button";
import { CardDescription } from "@/shared/ui/card";
import { useIsMounted } from "@/shared/lib/hooks/use-mounted";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { postsSelectors } from "./model/selectors/posts";
import { usePostsStore } from "./model/store/posts";

export default function Posts() {
  const posts = usePostsStore(postsSelectors.selectPosts);
  const mutatePosts = usePostsStore(postsSelectors.selectMutatePosts);
  const setParams = usePostsStore(postsSelectors.selectSetParams);
  const loadMorePosts = usePostsStore(postsSelectors.selectLoadMorePosts);
  const params = usePostsStore(postsSelectors.selectParams);
  const meta = usePostsStore(postsSelectors.selectMeta);
  const loadingStatus = usePostsStore(postsSelectors.selectLoading);
  const { isMounted } = useIsMounted();

  const [debouncedSearchValue] = useDebounce(params.search.value, 500);

  const isNoPostsFound = posts.length < 1 && !!params.search.value;
  const isLoadingInitial = loadingStatus === "init-loading";
  const isLoading = loadingStatus === "loading";
  const isNotLastPage = !meta.isLastPage && posts.length > 0;

  const searchInputProps = {
    placeholder: "Search...",
    value: params.search.value,
    onValueChange: (searchValue: string) => {
      setParams({
        search: { fields: params.search?.fields || [], value: searchValue },
      });
    },
  };

  useEffect(() => {
    if (isMounted) mutatePosts("loading");
  }, [debouncedSearchValue]);

  useEffect(() => {
    mutatePosts("init-loading");
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-center">
        Client-side Rendered Articles
      </h1>

      <div className="mb-5 sticky top-1">
        <SearchBar loading={isLoading} inputProps={searchInputProps} />
      </div>

      {isLoadingInitial && <PostsListSkeletons count={10} />}
      {!isLoadingInitial && <PostsList articles={posts} />}

      {isNoPostsFound && <div className="w-full text-center">Not found</div>}

      {isNotLastPage && (
        <div className="w-full flex justify-center">
          <Button
            className="mt-5 px-7"
            onClick={loadMorePosts}
            loading={isLoading}
          >
            Load more ...
          </Button>
        </div>
      )}
    </div>
  );
}
