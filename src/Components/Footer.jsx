const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Information */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Diverse Deal</h2>
                    <p className="mb-4">
                        We provide quality products and services that meet your needs. Your satisfaction is our top priority.
                    </p>
                    <p>&copy; {new Date().getFullYear()} Diverse Deal. All rights reserved.</p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-teal-500">Home</a></li>
                        <li><a href="#" className="hover:text-teal-500">Products</a></li>
                        <li><a href="#" className="hover:text-teal-500">About Us</a></li>
                        <li><a href="#" className="hover:text-teal-500">Contact</a></li>
                        <li><a href="#" className="hover:text-teal-500">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="mb-2">Email: info@Diverse Deal.com</p>
                    <p className="mb-2">Phone: +1 (555) 123-4567</p>
                    <p className="mb-2">Address: 123 Main Street, Copenhagen, Denmark</p>
                    <div className="mt-4">
                        <a href="#" className="inline-block text-teal-500 mr-4 hover:text-teal-800">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="inline-block text-teal-500 mr-4 hover:text-teal-800">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="inline-block text-teal-500 mr-4 hover:text-teal-800">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="inline-block text-teal-500 hover:text-teal-800">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
