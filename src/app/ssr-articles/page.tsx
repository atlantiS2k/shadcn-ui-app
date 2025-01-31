import { metadataConfig } from "@/constants/metadata";
import { SsrPostsList } from "@/features/ssr-articles";
import { Metadata } from "next";

export const metadata: Metadata = metadataConfig.ssrPage;

const delayRequest = <T,>(data: T): Promise<T> => {
  return new Promise((resolve) => setTimeout(() => resolve(data), 2000));
};

interface Props {
  searchParams: Record<string, string | undefined>;
}

export default async function Page({ searchParams }: Props) {
  const fakeResponse = await delayRequest({
    success: true,
    message: "Fake request completed",
  });

  console.log(fakeResponse);

  return <SsrPostsList search={searchParams} />;
}
