"use client";

import type { ReactNode } from "react";

interface ToastProviderProps {
  children: ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export function ToastProvider({
  children,
}: ToastProviderProps) {
  return <>{children}</>;
}