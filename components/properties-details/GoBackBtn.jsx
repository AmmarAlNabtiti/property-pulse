import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';

function GoBackBtn() {
  return (
    <section>
      <div className="container px-6 py-6 m-auto">
        <Link
          href="/properties"
          className="flex items-center text-blue-500 hover:text-blue-600"
        >
          <FaArrowLeft />
          <span className="ml-4">Back to Properties</span>
        </Link>
      </div>
    </section>
  );
}

export default GoBackBtn;
