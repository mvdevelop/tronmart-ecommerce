// ===== Product Types =====
export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  productsImage: string;
}

export interface ProductsData {
  products: Product[];
}

// ===== UI Types =====
export interface HeroSlide {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  discount: string;
  bgColor: string;
}

export interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link: string;
  linkText: string;
  color: string;
}

export interface PromoBanner {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  link: string;
  gradient: string;
  textColor: string;
  accent: string;
}

export interface CategoryItem {
  name: string;
  icon: string;
  color: string;
}

export interface StreamingService {
  name: string;
  icon: string;
  description: string;
  badge: string | null;
  color: string;
}

export interface MeliPlusBenefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}

export interface FooterSection {
  title: string;
  links: string[];
}

// ===== Component Props =====
export interface ProductCarouselProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}
