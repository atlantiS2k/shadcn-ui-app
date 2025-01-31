import React from "react";

export const getSkeleton = (
  count: number,
  skeleton: React.ReactNode
): React.ReactNode[] => {
  return Array.from({ length: count }, (_, index) => skeleton);
};
