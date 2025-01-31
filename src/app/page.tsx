import { metadataConfig } from "@/constants/metadata";
import { HomePage } from "@/features/main";
import type { Metadata } from "next";

export const metadata: Metadata = metadataConfig.home;

export default async function Page() {
  return <HomePage />;
}
