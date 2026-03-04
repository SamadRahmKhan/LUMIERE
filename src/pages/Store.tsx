import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";

const Store = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-20 md:pt-24">
      <section className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            The Collection
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            Every product is formulated with intention — pure ingredients, real results.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11 rounded-full bg-card"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 md:justify-center scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No products found.</p>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Store;
