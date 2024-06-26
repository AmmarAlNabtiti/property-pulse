import React from 'react';
import PropertyDetails from './PropertyDetails';

function PropertyInfo({ property }) {
  return (
    <section className="bg-blue-50">
      <div className="container px-6 py-10 m-auto">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-70/30">
          <PropertyDetails property={property} />

          {/* <!-- Sidebar --> */}
          <aside className="space-y-4">
            <button className="flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600">
              <i className="mr-2 fas fa-bookmark"></i> Bookmark Property
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600">
              <i className="mr-2 fas fa-share"></i> Share Property
            </button>

            {/* <!-- Contact Form --> */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-xl font-bold">
                Contact Property Manager
              </h3>
              <form>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="phone"
                  >
                    Phone:
                  </label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="message"
                  >
                    Message:
                  </label>
                  <textarea
                    className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none h-44 focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="flex items-center justify-center w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    <i className="mr-2 fas fa-paper-plane"></i> Send Message
                  </button>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default PropertyInfo;
