/**
 * ============================================================
 * MELKIST NAVIGATION CONFIGURATION
 * ============================================================
 * Top-level structure follows the master strategic document
 * (MELKIST-DOC-14050519): Property / Professional Services /
 * Construction & Equipment / Projects / Global Opportunities /
 * Magazine. Labels are NOT stored here - each item's `id` is
 * used as the translation key under the "nav" namespace.
 * ============================================================
 */

export type NavigationItem = {
  id: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
  requiresAuth?: boolean;
  children?: NavigationItem[];
};

export const mainNavigation: NavigationItem[] = [
  {
    id: "property",
    href: "/property",
    children: [
      { id: "buy-sale", href: "/property?status=sale" },
      { id: "rent", href: "/property?status=rent" },
      { id: "investment", href: "/investment" },
      { id: "sell-property", href: "/property/create?intent=sale" },
    ],
  },
  {
    id: "professional-services",
    href: "/professional-services",
    children: [
      { id: "architecture", href: "/architecture" },
      { id: "consulting", href: "/consulting" },
    ],
  },
  {
    id: "construction-equipment",
    href: "/construction-equipment",
  },
  {
    id: "projects",
    href: "/projects",
  },
  {
    id: "global-opportunities",
    href: "/global-opportunities",
  },
  {
    id: "magazine",
    href: "/magazine",
  },
];

export const userNavigation: NavigationItem[] = [
  { id: "favorites", href: "/favorites", requiresAuth: true },
  { id: "saved-searches", href: "/saved-searches", requiresAuth: true },
  { id: "dashboard", href: "/dashboard", requiresAuth: true },
];

export const publicNavigation: NavigationItem[] = [
  { id: "about", href: "/about" },
  { id: "contact", href: "/contact" },
];
