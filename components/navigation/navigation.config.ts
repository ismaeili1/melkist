/**
 * ============================================================
 * MELKIST NAVIGATION CONFIGURATION
 * ============================================================
 * Labels are NOT stored here - each item's `id` is used as the
 * translation key under the "nav" namespace in messages/*.json.
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
    id: "consulting",
    href: "/consulting",
    children: [
      { id: "buy-consulting", href: "/consulting/buy" },
      { id: "sale-consulting", href: "/consulting/sale" },
      { id: "rent-consulting", href: "/consulting/rent" },
      { id: "investment-consulting", href: "/consulting/investment" },
      { id: "valuation-consulting", href: "/consulting/valuation" },
    ],
  },
  {
    id: "buy-sale",
    href: "/property?status=sale",
    children: [
      { id: "buy-property", href: "/property?status=sale" },
      { id: "sell-property", href: "/property/create?intent=sale" },
      { id: "apartments", href: "/property?type=apartment" },
      { id: "villas", href: "/property?type=villa" },
      { id: "land", href: "/property?type=land" },
      { id: "commercial", href: "/property?type=commercial" },
    ],
  },
  {
    id: "rent",
    href: "/property?status=rent",
    children: [
      { id: "full-mortgage", href: "/property?status=mortgage" },
      { id: "rent-and-mortgage", href: "/property?status=rent" },
      { id: "short-term-rent", href: "/property?status=short-term-rent" },
    ],
  },
  {
    id: "investment",
    href: "/investment",
    children: [
      { id: "construction-partnership", href: "/investment/construction-partnership" },
      { id: "investment-opportunities", href: "/investment/opportunities" },
      { id: "development-projects", href: "/projects" },
    ],
  },
  {
    id: "architecture",
    href: "/architecture",
    children: [
      { id: "architecture-design", href: "/architecture/design" },
      { id: "interior-design", href: "/architecture/interior-design" },
      { id: "landscape-design", href: "/architecture/landscape" },
      { id: "architecture-supervision", href: "/architecture/supervision" },
      { id: "architecture-execution", href: "/architecture/execution" },
      { id: "renovation", href: "/architecture/renovation" },
    ],
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
