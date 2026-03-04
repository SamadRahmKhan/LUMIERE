import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Footer } from "@/components/Footer";

const tabs = ["Description", "Ingredients", "Reviews"] as const;

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Description");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="pt-24 container mx-auto px-4 text-center py-20">
        <p className="text-muted-foreground">Product not found.</p>
        <Link to="/store" className="text-primary underline mt-2 inline-block">Back to Store</Link>
      </main>
    );
  }

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <main className="pt-20 md:pt-24">
      <section className="container mx-auto px-4 md:px-8 py-6 md:py-12">
        <Link to="/store" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Store
        </Link>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <div className="aspect-square rounded-2xl overflow-hidden" style={{ background: product.color }} />

          {/* Info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="inline-block w-fit bg-foreground text-background text-[10px] font-sans font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl font-bold text-foreground">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Quantity + Add */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-3 bg-secondary rounded-full px-4 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button onClick={handleAdd} className="flex-1 rounded-full font-sans text-xs tracking-wider uppercase gap-2 shadow-glow" size="lg">
                <ShoppingBag className="w-4 h-4" />
                {added ? "Added!" : "Add to Bag"}
              </Button>
            </div>

            {/* Tabs */}
            <div className="border-t pt-6">
              <div className="flex gap-6 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                      activeTab === tab ? "border-primary text-foreground" : "border-transparent text-muted-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {activeTab === "Description" && <p>{product.description}</p>}
                {activeTab === "Ingredients" && <p>{product.ingredients}</p>}
                {activeTab === "Reviews" && (
                  <p>{product.reviews} customers rated this product {product.rating}/5 stars on average.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t p-3 md:hidden z-40">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">{product.name}</p>
            <p className="text-sm font-bold">${product.price}</p>
          </div>
          <Button onClick={handleAdd} className="rounded-full font-sans text-xs tracking-wider uppercase gap-2" size="sm">
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? "Added!" : "Add to Bag"}
          </Button>
        </div>
      </div>

      <div className="pb-16 md:pb-0">
        <Footer />
      </div>
    </main>
  );
};

export default ProductDetail;
