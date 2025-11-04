export default function ProductCard({ name, price, img }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center">
      <img
        src={img}
        alt={name}
        className="rounded-xl h-56 w-full object-cover mb-4"
      />
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <p className="text-green-600 font-bold">{price}</p>
      <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}
