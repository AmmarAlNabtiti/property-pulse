import PropertyCard from '@/components/utils/PropertyCard';
import { fetchProperties } from '@/utils/requests';

async function propertiesPage() {
  const {
    data: { properties },
  } = await fetchProperties();
  return (
    <section className="px-4 py-6">
      {!properties && (
        <h2 className="text-5xl text-center ">The is no properties yet</h2>
      )}
      <div className="px-4 py-6 m-auto container-xl lg:container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default propertiesPage;
