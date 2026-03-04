import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.png";
import product6 from "@/assets/product-6.png";
import product7 from "@/assets/product-7.png";
import product8 from "@/assets/product-8.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  category: string;
  ingredients: string;
  rating: number;
  reviews: number;
  images: string[];
  badge?: string;
  color: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Radiance Glow Serum",
    price: 68,
    originalPrice: 85,
    description: "A lightweight, fast-absorbing serum that delivers a powerful dose of vitamin C and hyaluronic acid to brighten and hydrate your skin. Perfect for daily use, morning and night.",
    shortDescription: "Vitamin C + Hyaluronic Acid brightening serum",
    category: "Serums",
    ingredients: "Vitamin C (L-Ascorbic Acid), Hyaluronic Acid, Niacinamide, Aloe Vera Extract, Jojoba Oil, Vitamin E",
    rating: 4.8,
    reviews: 234,
    images: [],
    badge: "Bestseller",
    color: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
    image: product1,
  },
  {
    id: "2",
    name: "Midnight Recovery Cream",
    price: 54,
    description: "Rich, nourishing night cream that works while you sleep to repair and rejuvenate your skin. Infused with retinol and peptides for visible anti-aging results.",
    shortDescription: "Retinol + Peptide overnight repair cream",
    category: "Moisturizers",
    ingredients: "Retinol, Peptide Complex, Shea Butter, Squalane, Ceramides, Lavender Oil",
    rating: 4.9,
    reviews: 189,
    images: [],
    color: "linear-gradient(135deg, #e8eaf6, #c5cae9)",
    image: product2,
  },
  {
    id: "3",
    name: "Petal Soft Cleanser",
    price: 36,
    description: "A gentle, pH-balanced cleanser that removes impurities without stripping your skin's natural moisture barrier. Formulated with rose water and chamomile.",
    shortDescription: "Rose water gentle daily cleanser",
    category: "Cleansers",
    ingredients: "Rose Water, Chamomile Extract, Glycerin, Green Tea Extract, Aloe Vera, Coconut-derived Surfactants",
    rating: 4.7,
    reviews: 312,
    images: [],
    color: "linear-gradient(135deg, #fce4ec, #f3e5f5)",
    image: product3,
  },
  {
    id: "4",
    name: "Golden Hour Face Oil",
    price: 78,
    description: "A luxurious blend of 9 botanical oils that deeply nourish and restore your skin's natural radiance. Lightweight formula absorbs quickly without greasy residue.",
    shortDescription: "9-oil botanical radiance blend",
    category: "Serums",
    ingredients: "Rosehip Oil, Argan Oil, Marula Oil, Jojoba Oil, Sea Buckthorn Oil, Vitamin E, Turmeric Extract",
    rating: 4.9,
    reviews: 156,
    images: [],
    badge: "New",
    color: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
    image: product4,
  },
  {
    id: "5",
    name: "Cloud Veil Moisturizer",
    price: 48,
    description: "Ultra-light gel-cream moisturizer that provides 72-hour hydration with a weightless, cloud-like texture. Perfect for all skin types.",
    shortDescription: "72-hour lightweight gel moisturizer",
    category: "Moisturizers",
    ingredients: "Hyaluronic Acid, Squalane, Centella Asiatica, Aloe Vera, Probiotics, Snow Mushroom Extract",
    rating: 4.6,
    reviews: 278,
    images: [],
    color: "linear-gradient(135deg, #e0f7fa, #e8eaf6)",
    image: product5,
  },
  {
    id: "6",
    name: "Rose Quartz Eye Cream",
    price: 42,
    description: "Targeted eye treatment that reduces dark circles, puffiness, and fine lines. Infused with caffeine and rose quartz micro-crystals for an instant brightening effect.",
    shortDescription: "De-puffing & brightening eye treatment",
    category: "Eye Care",
    ingredients: "Caffeine, Rose Quartz Powder, Peptides, Vitamin K, Cucumber Extract, Hyaluronic Acid",
    rating: 4.5,
    reviews: 145,
    images: [],
    color: "linear-gradient(135deg, #fce4ec, #e8eaf6)",
    image: product6,
  },
  {
    id: "7",
    name: "Silk Renewal Exfoliant",
    price: 44,
    originalPrice: 52,
    description: "Gentle chemical exfoliant combining AHA and BHA acids to reveal smoother, brighter skin. Use 2-3 times per week for best results.",
    shortDescription: "AHA/BHA gentle resurfacing treatment",
    category: "Cleansers",
    ingredients: "Glycolic Acid (AHA), Salicylic Acid (BHA), Lactic Acid, Willow Bark Extract, Aloe Vera",
    rating: 4.7,
    reviews: 198,
    images: [],
    color: "linear-gradient(135deg, #f3e5f5, #e1bee7)",
    image: product7,
  },
  {
    id: "8",
    name: "Dewdrop SPF 50",
    price: 38,
    description: "Invisible, weightless sunscreen that leaves a dewy, luminous finish. No white cast, no greasiness — just pure protection with a glow.",
    shortDescription: "Invisible dewy-finish sunscreen",
    category: "Sun Care",
    ingredients: "Zinc Oxide, Niacinamide, Hyaluronic Acid, Vitamin E, Green Tea Extract, Squalane",
    rating: 4.8,
    reviews: 421,
    images: [],
    badge: "Popular",
    color: "linear-gradient(135deg, #fffde7, #fff9c4)",
    image: product8,
  },
];

export const categories = ["All", "Serums", "Moisturizers", "Cleansers", "Eye Care", "Sun Care"];

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophie Laurent",
    avatar: "SL",
    rating: 5,
    text: "The Radiance Glow Serum transformed my skin in just two weeks. My complexion has never looked this luminous and healthy!",
    product: "Radiance Glow Serum",
  },
  {
    id: "2",
    name: "Emma Chen",
    avatar: "EC",
    rating: 5,
    text: "I've tried countless night creams, but the Midnight Recovery Cream is on another level. I wake up with visibly plumper, smoother skin every morning.",
    product: "Midnight Recovery Cream",
  },
  {
    id: "3",
    name: "Aria Patel",
    avatar: "AP",
    rating: 5,
    text: "Finally found a cleanser that doesn't strip my sensitive skin! The Petal Soft Cleanser leaves my face feeling clean yet nourished.",
    product: "Petal Soft Cleanser",
  },
  {
    id: "4",
    name: "Mia Rodriguez",
    avatar: "MR",
    rating: 4,
    text: "The Golden Hour Face Oil gives my skin the most beautiful natural glow. It's become the crown jewel of my skincare routine.",
    product: "Golden Hour Face Oil",
  },
];
