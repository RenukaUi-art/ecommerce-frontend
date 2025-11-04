import ProductCard from "./ProductCard";

const products = [
  {
    name: "Organic Grinder",
    price: "$24.99",
    img: "https://images.unsplash.com/photo-1606813902779-9f3cf0598f87?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Natural Rolling Paper",
    price: "$9.99",
    img: "https://images.unsplash.com/photo-1617540957554-d9f22156b4d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Herbal Mix",
    price: "$14.99",
    img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Eco Bong",
    price: "$59.99",
    img: "https://images.unsplash.com/photo-1600359752036-0e6e8b1b3e3b?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProductList() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h3 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        Featured Products
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
