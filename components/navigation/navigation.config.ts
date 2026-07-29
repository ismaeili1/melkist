/**
 * ============================================================
 * MELKIST NAVIGATION CONFIGURATION
 * ============================================================
 *
 * Version:
 * MELKIST v0.6.9.3
 *
 * Purpose:
 * Centralized navigation configuration for:
 *
 * - Desktop Navigation
 * - Mobile Navigation
 * - Future Mega Menu
 * - Localization
 * - Role-based Navigation
 *
 * ============================================================
 */

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
  requiresAuth?: boolean;
  children?: NavigationItem[];
};

export const mainNavigation: NavigationItem[] = [
  {
    id: "consulting",
    label: "خدمات مشاوره",
    href: "/consulting",
    children: [
      {
        id: "buy-consulting",
        label: "مشاوره خرید ملک",
        href: "/consulting/buy",
      },
      {
        id: "sale-consulting",
        label: "مشاوره فروش ملک",
        href: "/consulting/sale",
      },
      {
        id: "rent-consulting",
        label: "مشاوره رهن و اجاره",
        href: "/consulting/rent",
      },
      {
        id: "investment-consulting",
        label: "مشاوره سرمایه‌گذاری",
        href: "/consulting/investment",
      },
      {
        id: "valuation-consulting",
        label: "ارزیابی و ارزش‌گذاری ملک",
        href: "/consulting/valuation",
      },
    ],
  },

  {
    id: "buy-sale",
    label: "خرید و فروش",
    href: "/property?status=sale",
    children: [
      {
        id: "buy-property",
        label: "خرید ملک",
        href: "/property?status=sale",
      },
      {
        id: "sell-property",
        label: "فروش ملک",
        href: "/property/create?intent=sale",
      },
      {
        id: "apartments",
        label: "آپارتمان",
        href: "/property?type=apartment",
      },
      {
        id: "villas",
        label: "خانه و ویلا",
        href: "/property?type=villa",
      },
      {
        id: "land",
        label: "زمین",
        href: "/property?type=land",
      },
      {
        id: "commercial",
        label: "املاک تجاری",
        href: "/property?type=commercial",
      },
    ],
  },

  {
    id: "rent",
    label: "رهن و اجاره",
    href: "/property?status=rent",
    children: [
      {
        id: "full-mortgage",
        label: "رهن کامل",
        href: "/property?status=mortgage",
      },
      {
        id: "rent-and-mortgage",
        label: "رهن و اجاره",
        href: "/property?status=rent",
      },
      {
        id: "short-term-rent",
        label: "اجاره کوتاه‌مدت",
        href: "/property?status=short-term-rent",
      },
    ],
  },

  {
    id: "investment",
    label: "مشارکت و سرمایه‌گذاری",
    href: "/investment",
    children: [
      {
        id: "construction-partnership",
        label: "مشارکت در ساخت",
        href: "/investment/construction-partnership",
      },
      {
        id: "investment-opportunities",
        label: "فرصت‌های سرمایه‌گذاری",
        href: "/investment/opportunities",
      },
      {
        id: "development-projects",
        label: "پروژه‌های ساختمانی",
        href: "/projects",
      },
    ],
  },

  {
    id: "architecture",
    label: "خدمات تخصصی معماری و ساختمان",
    href: "/architecture",
    children: [
      {
        id: "architecture-design",
        label: "طراحی معماری",
        href: "/architecture/design",
      },
      {
        id: "interior-design",
        label: "معماری داخلی",
        href: "/architecture/interior-design",
      },
      {
        id: "landscape-design",
        label: "طراحی لنداسکیپ",
        href: "/architecture/landscape",
      },
      {
        id: "architecture-supervision",
        label: "نظارت معماری",
        href: "/architecture/supervision",
      },
      {
        id: "architecture-execution",
        label: "اجرای معماری",
        href: "/architecture/execution",
      },
      {
        id: "renovation",
        label: "بازسازی",
        href: "/architecture/renovation",
      },
    ],
  },
];

export const userNavigation: NavigationItem[] = [
  {
    id: "favorites",
    label: "علاقه‌مندی‌ها",
    href: "/favorites",
    requiresAuth: true,
  },

  {
    id: "saved-searches",
    label: "جست‌وجوهای ذخیره‌شده",
    href: "/saved-searches",
    requiresAuth: true,
  },

  {
    id: "dashboard",
    label: "داشبورد",
    href: "/dashboard",
    requiresAuth: true,
  },
];

export const publicNavigation: NavigationItem[] = [
  {
    id: "about",
    label: "درباره ملکیست",
    href: "/about",
  },

  {
    id: "contact",
    label: "تماس با ما",
    href: "/contact",
  },
];