export default function Locations() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold text-green-700 mb-6">Our Locations</h2>
      <p className="text-gray-700 mb-8">
        Visit one of our stores or shop online from anywhere.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-600">New York</h3>
          <p className="text-gray-600">123 Green Street, NY 10001</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-600">Los Angeles</h3>
          <p className="text-gray-600">987 Eco Blvd, LA 90001</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-600">Chicago</h3>
          <p className="text-gray-600">456 Organic Ave, IL 60601</p>
        </div>
      </div>
    </section>
  );
}
