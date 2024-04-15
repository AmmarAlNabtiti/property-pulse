import GoBackBtn from '@/components/properties-details/GoBackBtn';
import PropertyInfo from '@/components/properties-details/PropertyInfo';
import PropertyHeaderImage from '@/components/properties-details/propertyHeaderImage';
import { fetchSingleProperty } from '@/utils/requests';

async function PropertyDetails({ params }) {
  const {
    data: { property },
  } = await fetchSingleProperty(params.propertyID);

  return (
    <>
      <PropertyHeaderImage images={property[0].images} />
      <GoBackBtn />
      <PropertyInfo property={property[0]} />
    </>
  );
}

export default PropertyDetails;
