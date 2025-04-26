import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1d1d1d] md:px-24 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div>
          <img src="../images/logo.png" alt="Bhartiyam School" className="w-20 mb-4" />
          <h1 className="text-white font-bold text-lg mb-2">BHARTIYAM SCHOOL</h1>
          <p className="text-sm leading-6">
            We Bhartiyam School, situated at Beohari, Shahdol, Madhya Pradesh believe in providing academic excellence to our students.
          </p>
        </div>

        {/* Menu Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/events" className="hover:underline">Events</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><Link to="/achievements" className="hover:underline">Achievements</Link></li>
            <li><Link to="/facilities" className="hover:underline">Facilities</Link></li>
            <li><Link to="/admission" className="hover:underline">Admission</Link></li>
            <li><Link to="/career" className="hover:underline">Career</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white font-semibold mb-4">Contact</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-yellow-400 mr-3 mt-1" />
              Near JAI Stambh Beohari, Beohari, Shahdol, Madhya Pradesh 484774
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-yellow-400 mr-3" />
              +91-9425090591, 07650-262231
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-yellow-400 mr-3" />
              bhartiyam@info.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between px-4 container mx-auto">
        <p className="text-xs">&copy; 2024 <span className="text-blue-400 font-semibold">Develco</span> | All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="#"><FaPinterestP /></Link>
          <Link to="#"><FaLinkedinIn /></Link>
          <Link to="#"><FaInstagram /></Link>
          <Link to="#"><FaFacebookF /></Link>
          <Link to="#"><FaTwitter /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
