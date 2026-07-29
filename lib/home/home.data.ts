import type {
  HomeArchitectureService,
  HomeProject,
  HomeProperty,
  HomeService,
} from "./home.types";

export const homeServices: HomeService[] = [
  {
    id: "consulting",
    number: "01",
    title: "خدمات مشاوره",
    description:
      "تحلیل، بررسی و ارائه راهکار برای تصمیم‌گیری مطمئن‌تر در حوزه ملک و ساختمان.",
    href: "/consulting",
    category: "consulting",
  },
  {
    id: "sale",
    number: "02",
    title: "خرید و فروش",
    description:
      "دسترسی به فرصت‌های ملکی برای خرید، فروش و انتخاب آگاهانه.",
    href: "/buy-sell",
    category: "sale",
  },
  {
    id: "rent",
    number: "03",
    title: "رهن و اجاره",
    description:
      "جست‌وجوی سریع‌تر و دقیق‌تر برای اجاره و رهن ملک.",
    href: "/rent",
    category: "rent",
  },
  {
    id: "investment",
    number: "04",
    title: "مشارکت و سرمایه‌گذاری",
    description:
      "شناسایی فرصت‌های سرمایه‌گذاری و مشارکت در پروژه‌های ساختمانی.",
    href: "/investment",
    category: "investment",
  },
  {
    id: "architecture",
    number: "05",
    title: "خدمات معماری و ساختمان",
    description:
      "از طراحی و ایده‌پردازی تا نظارت، اجرا و تکمیل پروژه.",
    href: "/architecture",
    category: "architecture",
  },
];

export const featuredProperties: HomeProperty[] = [
  {
    id: "property-1",
    title: "آپارتمان مدرن شهری",
    propertyType: "آپارتمان",
    location: "تهران، منطقه ۱",
    price: "قیمت توافقی",
    image: "/images/properties/property-1.jpg",
    href: "/property/property-1",
    featured: true,
  },
  {
    id: "property-2",
    title: "ویلای معاصر",
    propertyType: "ویلا",
    location: "مازندران",
    price: "قیمت توافقی",
    image: "/images/properties/property-2.jpg",
    href: "/property/property-2",
    featured: true,
  },
  {
    id: "property-3",
    title: "دفتر اداری",
    propertyType: "دفتر اداری",
    location: "تهران، منطقه ۲",
    price: "قیمت توافقی",
    image: "/images/properties/property-3.jpg",
    href: "/property/property-3",
    featured: true,
  },
];

export const architectureServices: HomeArchitectureService[] = [
  {
    id: "architectural-design",
    title: "طراحی معماری",
    description: "طراحی فضاهای معماری با رویکرد عملکردی و معاصر.",
    href: "/architecture/design",
  },
  {
    id: "interior-design",
    title: "معماری داخلی",
    description: "طراحی تجربه فضایی داخلی هماهنگ با نیاز کاربران.",
    href: "/architecture/interior",
  },
  {
    id: "facade-design",
    title: "طراحی نما",
    description: "خلق هویت بصری و معماری برای ساختمان.",
    href: "/architecture/facade",
  },
  {
    id: "landscape",
    title: "لنداسکیپ",
    description: "طراحی ارتباط میان معماری، طبیعت و فضای باز.",
    href: "/architecture/landscape",
  },
  {
    id: "supervision",
    title: "نظارت معماری",
    description: "کنترل کیفیت و انطباق اجرای پروژه با طراحی.",
    href: "/architecture/supervision",
  },
  {
    id: "construction",
    title: "اجرا",
    description: "مدیریت و اجرای پروژه از طراحی تا ساخت.",
    href: "/architecture/construction",
  },
  {
    id: "renovation",
    title: "بازسازی",
    description: "بازآفرینی و ارتقای کیفیت فضاهای موجود.",
    href: "/architecture/renovation",
  },
  {
    id: "visualization",
    title: "مدل‌سازی و رندرینگ",
    description: "تبدیل ایده‌های معماری به تصویر و تجربه قابل درک.",
    href: "/architecture/visualization",
  },
];

export const featuredProjects: HomeProject[] = [
  {
    id: "project-1",
    title: "پروژه‌های ساختمانی",
    description:
      "بررسی و معرفی پروژه‌های منتخب ساختمانی و توسعه‌ای.",
    category: "پروژه ساختمانی",
    href: "/projects",
  },
  {
    id: "project-2",
    title: "فرصت‌های سرمایه‌گذاری",
    description:
      "فرصت‌هایی برای مشارکت و سرمایه‌گذاری در پروژه‌های منتخب.",
    category: "سرمایه‌گذاری",
    href: "/investment",
  },
];