export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h5 className="text-lg font-semibold mb-3 text-white">About Us</h5>
          <p>We offer premium organic lifestyle products for conscious living.</p>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-3 text-white">Quick Links</h5>
          <ul>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-3 text-white">Contact</h5>
          <p>Email: support@greenleaf.com</p>
          <p>Phone: +1 (800) 555-1234</p>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-10">
        © 2025 GreenLeaf. All rights reserved.
      </p>
    </footer>
  );
}
