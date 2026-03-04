import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden bg-card shadow-soft transition-all duration-500 hover:shadow-glow hover:-translate-y-1">
        {/* Image area */}
        <div className="relative aspect-[3/4] overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              style={{ background: product.color }}
            />
          )}
          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-foreground text-background text-[10px] font-sans font-semibold tracking-wider uppercase px-3 py-1 rounded-full z-10">
              {product.badge}
            </span>
          )}
          {/* Add to cart overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 md:block hidden">
            <Button
              onClick={handleAdd}
              className="w-full rounded-full font-sans text-xs tracking-wider uppercase gap-2"
              size="sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {added ? "Added!" : "Add to Bag"}
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-center gap-1 mb-1">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
          </div>
          <h3 className="font-serif text-sm md:text-base font-medium text-foreground mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-xs text-muted-foreground mb-2 line-clamp-1 hidden md:block">{product.shortDescription}</p>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>

          {/* Mobile add button */}
          <Button
            onClick={handleAdd}
            className="w-full rounded-full font-sans text-xs tracking-wider uppercase gap-2 mt-3 md:hidden"
            size="sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? "Added!" : "Add to Bag"}
          </Button>
        </div>
      </div>
    </Link>
  );
};
