import React from 'react';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCheck,
  FaTimes,
  FaMapMarkerAlt,
} from 'react-icons/fa';

function PropertyDetails({ property }) {
  return (
    <main>
      <div className="p-6 text-center bg-white rounded-lg shadow-md md:text-left">
        <div className="mb-4 text-gray-500">{property.type}</div>
        <h1 className="mb-4 text-3xl font-bold">{property.name}</h1>
        <div className="flex justify-center mb-4 text-gray-500 align-middle md:justify-start">
          <FaMapMarkerAlt className="mr-2 text-lg text-orange-700" />
          <p className="text-orange-700">
            {property.location.street}, {property.location.city},{' '}
            {property.location.state} {property.location.zipcode}
          </p>
        </div>

        <h3 className="p-2 my-6 text-lg font-bold text-white bg-gray-800">
          Rates & Options
        </h3>
        <div className="flex flex-col justify-around md:flex-row">
          <div className="flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0">
            <div className="mr-2 font-bold text-gray-500">Nightly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.nightly ? (
                `$${property.rates.nightly}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0">
            <div className="mr-2 font-bold text-gray-500">Weekly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.weekly ? (
                `$${property.rates.weekly}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center pb-4 mb-4 md:pb-0">
            <div className="mr-2 font-bold text-gray-500">Monthly</div>
            <div className="text-2xl font-bold text-blue-500">
              {property.rates.monthly ? (
                `$${property.rates.monthly}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
        <h3 className="mb-6 text-lg font-bold">Description & Details</h3>
        <div className="flex items-center justify-center gap-4 mb-4 text-xl text-blue-500 space-x-9">
          <div className="flex items-center gap-4">
            <span className="inline-block">
              <FaBed />
            </span>
            <span className="inline-block">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-block">
              <FaBath />
            </span>
            <span className="inline-block">{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-block">
              <FaRulerCombined />
            </span>
            <span className="inline-block">{property.square_feet} sqft</span>
          </div>
        </div>
        <p className="mb-4 text-gray-500">{property.description}</p>
      </div>

      <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
        <h3 className="mb-6 text-lg font-bold">Amenities</h3>
        <ul className="grid grid-cols-1 list-none md:grid-cols-2 lg:grid-cols-3">
          {property.amenities.map((amenity, index) => (
            <li className="flex items-center gap-3 " key={index}>
              <span className="inline-block">
                <FaCheck className="text-green-600 " />
              </span>
              <span className="inline-block">{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
        <div id="map"></div>
        {/* Assuming you might want to implement a map here */}
      </div>
    </main>
  );
}

export default PropertyDetails;
