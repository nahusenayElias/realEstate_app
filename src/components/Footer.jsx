import { Link } from 'react-router-dom';
import React from 'react'; 
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'react-feather';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, url: '#' },
    { icon: <Twitter size={20} />, url: '#' },
    { icon: <Instagram size={20} />, url: '#' },
    { icon: <Linkedin size={20} />, url: '#' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">EstatePro</h3>
            <p className="text-gray-300 mb-4">
              Helping you find your dream property with over 15 years of experience in the real estate market.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-300 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-primary transition-colors">Property Sales</li>
              <li className="text-gray-300 hover:text-primary transition-colors">Property Rentals</li>
              <li className="text-gray-300 hover:text-primary transition-colors">Property Management</li>
              <li className="text-gray-300 hover:text-primary transition-colors">Valuation Services</li>
              <li className="text-gray-300 hover:text-primary transition-colors">Investment Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-300">123 Real Estate Ave, Suite 100, New York, NY 10001</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={18} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={18} />
                <a href="mailto:info@estatepro.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@estatepro.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} EstatePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;