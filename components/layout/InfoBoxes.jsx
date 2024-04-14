import InfoBox from '../utils/InfoBox';

function InfoBoxes() {
  return (
    <section>
      <div className="m-auto container-xl lg:container">
        <div className="grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2">
          <InfoBox
            bgColor="bg-gray-100"
            btnColor={'bg-black'}
            title="For Renters"
            description="Find your dream rental property. Bookmark properties and contact
              owners."
            btnText="Browse Properties"
            href="properties"
          />

          <InfoBox
            bgColor="bg-blue-100"
            btnColor={'bg-blue-500'}
            title="For Property Owners"
            description="List your properties and reach potential tenants. Rent as an
              airbnb or long term."
            btnText="Add Property"
            href="properties/add"
          />
        </div>
      </div>
    </section>
  );
}

export default InfoBoxes;
