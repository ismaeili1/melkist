"use client";

import { ReactNode } from "react";
import styles from "./AuthCard.module.css";

interface AuthCardProps {
  children: ReactNode;
  className?: string;
}

export default function AuthCard({
  children,
  className = "",
}: AuthCardProps) {
  return (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  );
}