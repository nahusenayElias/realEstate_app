import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react'; 
import { FaBed, FaBath, FaRulerCombined, FaHeart } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm">
          <FaHeart className="text-gray-400 hover:text-primary cursor-pointer" size={18} />
        </div>
        <div className="absolute bottom-2 left-2 bg-primary text-white px-2 py-1 rounded-md text-sm font-medium">
          {property.type}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{property.title}</h3>
        <p className="text-gray-600 mb-3">{property.address}</p>
        <p className="text-primary font-bold text-xl mb-3">${property.price.toLocaleString()}</p>

        <div className="flex justify-between items-center text-gray-500 text-sm border-t pt-3">
          <div className="flex items-center gap-1">
            <FaBed size={16} />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <FaBath size={16} />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRulerCombined size={16} />
            <span>{property.area} sqft</span>
          </div>
        </div>

        <Link
          to={`/property/${property.id}`}
          className="block mt-4 text-center bg-primary text-white py-2 rounded-md hover:bg-secondary transition-colors"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
