import { metadataConfig } from "@/constants/metadata";
import { CSRArticlesPage } from "@/features/csr-articles";
import { Metadata } from "next";

export const metadata: Metadata = metadataConfig.csrPage;

export default async function Page() {
  return <CSRArticlesPage />;
}
