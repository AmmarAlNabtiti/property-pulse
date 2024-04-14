'use client';

import { useParams } from 'next/navigation';

function PropertyDetails({ params }) {
  const data = useParams();
  const { propertyID } = params;
  console.log(data);
  return <h1>{propertyID}</h1>;
}

export default PropertyDetails;
