"use client";
import NextTopLoader from "nextjs-toploader";
import { useIsMounted } from "@/shared/lib/hooks/use-mounted";

export default function Page() {
  const { isMounted } = useIsMounted();
  if (!isMounted) return null;
  return <NextTopLoader color={"blue"} />;
}
