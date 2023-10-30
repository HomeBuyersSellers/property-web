import PropertyType from "@/components/layout/PropertyType";
import { unstable_setRequestLocale } from "next-intl/server";
async function getProperties() {
  try {
    const data  = await import(`/JSON/property.json`);
    return data.default;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
}


export default async function Page({ params }) {
  const fetchData = async (type) => {
    const properties = await getProperties();
    const filteredProperties = Object.keys(properties).length > 0 && properties.properties.length > 0 && properties.properties.filter((property) => property.propertyType.toLowerCase() === type.toLowerCase());
    return filteredProperties;
  };
  
  const { locale, propertyType } = params;
  const properties = await fetchData(propertyType);
  unstable_setRequestLocale(locale);

  return (
    <div className="container mx-auto property flex flex-col  w-full h-full xxl:h-screen py-5 md:flex-row">
      <PropertyType  propertiesData={properties}/>
    </div>
  );
}
