export type PropertyResult = {
  id: string;

  title: string;

  type: string;

  transaction: string;

  city: string;

  district: string;

  neighborhood: string;

  area: number;

  bedrooms: number;

  bathrooms: number;

  floor: number;

  totalFloors: number;

  buildingAge: number;

  parking: number;

  price: string;

  image: string;

  images: string[];

  description: string;

  amenities: string[];

  featured?: boolean;
};

export const propertyResults: PropertyResult[] = [
{
  id: "property-001",

  title: "آپارتمان مدرن با طراحی معاصر",

  type: "آپارتمان",

  transaction: "فروش",

  city: "تهران",

  district: "منطقه ۱",

  neighborhood: "نیاوران",

  area: 185,

  bedrooms: 3,

  bathrooms: 2,

  floor: 5,

  totalFloors: 8,

  buildingAge: 2,

  parking: 2,

  price: "۲۴ میلیارد تومان",

  image:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",

  images: [
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",

    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",

    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",

    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  ],

  description:
    "این آپارتمان مدرن با طراحی معاصر، نورگیری مناسب و دسترسی مطلوب شهری در یکی از محدوده‌های شاخص منطقه یک تهران قرار دارد. طراحی داخلی، کیفیت متریال و سازماندهی فضایی از ویژگی‌های اصلی این ملک هستند.",

  amenities: [
    "پارکینگ اختصاصی",

    "انباری",

    "آسانسور",

    "لابی",

    "بالکن",

    "سیستم امنیتی",
  ],

  featured: true,
},

 {
  id: "property-002",

  title: "خانه ویلایی با فضای سبز",

  type: "ویلا",

  transaction: "فروش",

  city: "تهران",

  district: "لواسان",

  neighborhood: "گلندوک",

  area: 320,

  bedrooms: 4,

  bathrooms: 3,

  floor: 1,

  totalFloors: 2,

  buildingAge: 4,

  parking: 3,

  price: "۳۸ میلیارد تومان",

  image:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",

  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",

    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",

    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
  ],

  description:
    "ویلایی با فضای سبز اختصاصی، طراحی معاصر و ارتباط مناسب میان فضاهای داخلی و محیط بیرونی.",

  amenities: [
    "حیاط اختصاصی",

    "پارکینگ",

    "فضای سبز",

    "تراس",

    "انباری",
  ],

  featured: false,
},

  {
    id: "property-003",

    title: "خانه ویلایی با حیاط خصوصی",

    type: "خانه",

    transaction: "خرید",

    city: "تهران",

    district: "منطقه ۵",

    neighborhood: "شهران",

    area: 220,

    bedrooms: 4,

    bathrooms: 2,

    floor: 1,

    totalFloors: 2,

    buildingAge: 8,

    parking: 2,

    price: "۳۲ میلیارد تومان",

    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",

    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",

      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",

      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    ],

    description:
      "خانه ویلایی با حیاط خصوصی، فضای مناسب خانوادگی و دسترسی مناسب به امکانات شهری در محدوده شهران تهران.",

    amenities: [
      "حیاط خصوصی",

      "پارکینگ اختصاصی",

      "انباری",

      "تراس",

      "فضای سبز",
    ],
  },

  {
    id: "property-004",

    title: "ویلای آرام در منطقه خوش‌آب‌وهوا",

    type: "ویلا",

    transaction: "خرید",

    city: "کرج",

    district: "کردان",

    neighborhood: "سهیلیه",

    area: 350,

    bedrooms: 4,

    bathrooms: 3,

    floor: 1,

    totalFloors: 2,

    buildingAge: 3,

    parking: 4,

    price: "۲۸ میلیارد تومان",

    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",

    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",

      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",

      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    ],

    description:
      "ویلایی آرام در منطقه خوش‌آب‌وهوا با فضای سبز گسترده، حیاط خصوصی و ظرفیت مناسب برای سکونت یا استفاده تفریحی.",

    amenities: [
      "حیاط بزرگ",

      "فضای سبز",

      "پارکینگ",

      "استخر",

      "تراس",

      "آشپزخانه مجهز",
    ],
  },
];