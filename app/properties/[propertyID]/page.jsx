function PropertyDetails({ params }) {
  const { propertyID } = params;
  console.log(propertyID);
  return <h1>{propertyID}</h1>;
}

export default PropertyDetails;
