export type HomeService = {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  category:
    | "consulting"
    | "sale"
    | "rent"
    | "investment"
    | "architecture";
};

export type HomeProperty = {
  id: string;
  title: string;
  propertyType: string;
  location: string;
  price: string;
  image: string;
  href: string;
  featured: boolean;
};

export type HomeProject = {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
  image?: string;
};

export type HomeArchitectureService = {
  id: string;
  title: string;
  description: string;
  href: string;
};