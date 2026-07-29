"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Link from "next/link";

import {
  mainNavigation,
} from "@/components/navigation/navigation.config";

import styles from "./SiteHeader.module.css";

export interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
}

function isNavigationItemActive(
  pathname: string,
  href: string,
) {
  const hrefPath = href.split("?")[0];

  if (hrefPath === "/") {
    return pathname === "/";
  }

  return (
    pathname === hrefPath ||
    pathname.startsWith(`${hrefPath}/`)
  );
}

export function MobileNavigation({
  open,
  onClose,
}: MobileNavigationProps) {
  const [
    activeHref,
    setActiveHref,
  ] = useState<string | null>(null);

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const currentPath =
      window.location.pathname;

    setActiveHref(currentPath);

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    closeButtonRef.current?.focus();

    function handleEscape(
      event: KeyboardEvent,
    ) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  function handleNavigationClick(
    href: string,
  ) {
    setActiveHref(href);
    onClose();
  }

  return (
    <div
      className={
        styles.mobileNavigationOverlay
      }
      role="presentation"
      onClick={onClose}
    >
      <nav
        id="mobile-navigation"
        className={
          styles.mobileNavigationPanel
        }
        aria-label="منوی اصلی موبایل"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div
          className={
            styles.mobileNavigationHeader
          }
        >
          <span
            className={
              styles.mobileNavigationTitle
            }
          >
            منوی اصلی
          </span>

          <button
            ref={closeButtonRef}
            type="button"
            className={
              styles.mobileNavigationClose
            }
            onClick={onClose}
            aria-label="بستن منو"
          >
            ×
          </button>
        </div>

        <ul
          className={
            styles.mobileNavigationList
          }
        >
          {mainNavigation.map((item) => {
            const isActive =
              activeHref === item.href;

            return (
              <li
                key={item.id}
                className={
                  styles.mobileNavigationItem
                }
              >
                <Link
                  href={item.href}
                  className={[
                    styles.mobileNavigationLink,
                    isActive
                      ? styles.mobileNavigationLinkActive
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => {
                    handleNavigationClick(
                      item.href,
                    );
                  }}
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          className={
            styles.mobileNavigationActions
          }
        >
          <Link
            href="/login"
            className={
              styles.mobileLoginLink
            }
            onClick={onClose}
          >
            ورود
          </Link>

          <Link
            href="/property/create"
            className={
              styles.mobileCreateListingButton
            }
            onClick={onClose}
          >
            ثبت ملک
          </Link>
        </div>
      </nav>
    </div>
  );
}