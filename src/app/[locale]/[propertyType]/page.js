import PropertyType from "@/components/layout/PropertyType";
import { unstable_setRequestLocale } from "next-intl/server";


async function getProperties() {
  try {
    const data = await import(`/JSON/property.json`);
    return data.default;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
}


export default async function Page({ params }) {
  const fetchData = async (type) => {
    console.log(type, "TYPEFETCH");
    const properties = await getProperties();
    console.log(properties , ">><<<")
    const filteredProperties = Object.keys(properties).length > 0 && properties.properties.length > 0 && properties.properties.filter((property) => property.propertyType.toLowerCase() === type.toLowerCase());
    console.log(filteredProperties, "dataProperties");
    return filteredProperties;
  };
  
  const { locale, propertyType } = params;
  const properties = await fetchData(propertyType);
  unstable_setRequestLocale(locale);
  console.log(params,"params")

  return (
    <div className="container mx-auto property flex w-full h-screen py-5">
      <PropertyType  propertiesData={properties}/>
    </div>
  );
}
