import MapView from "@/components/MapComponent";
import { DetailedPageHeader } from "@/components/PageHeader";
import PhotoGallery from "@/components/PhotoGallery";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/Table";
import Button from "@/components/common/Button";
import { MapStyles } from "@/utils/constants";

async function getSinglePageDetail() {
  try {
    const data = await import(`/JSON/property.json`);
    return data.default;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

export default async function ProductDetail({ params }) {
  const { propertySlug } = params;
  const fetchSingleDetails = async (propertySlug) => {
    const propertyDetail = await getSinglePageDetail();
    const filterSingleData =
      Object.keys(propertyDetail).length > 0 &&
      propertyDetail.properties.length > 0 &&
      propertyDetail.properties.filter(
        (property) =>
          property.propertyName.toLowerCase() ===
          propertySlug.split("-").join(" ").toLowerCase()
      );
    return filterSingleData;
  };
  const detailPage = await fetchSingleDetails(propertySlug);
  const details = detailPage[0];
  console.log(details);

  return (
    <div className="container mx-auto py-7 px-5">
      <DetailedPageHeader propertyName={details.propertyName} location={details.location}/>
      <PhotoGallery
        defaultImage={details.image}
        images={details.imageGallery}
      />

      <div className="flex flex-wrap -mx-4 my-5">
        <div className="md:w-full px-4 lg:w-2/3 xxl:w-2/3 order-1 lg:order-1 md:order-2">
          <div className="additional-info grid grid-cols-5 items-center rounded-md shadow-sm  border-2 border-light-gray-color p-3 py-5">
            <div className="info text-center">
              <h2 className="font-medium text-black-400 capitalize mb-2">
                Bedroom
              </h2>
              <p className="text-gray-600 font-normal capitalize">
                <i className="ri-hotel-bed-line me-2"></i>
                {details &&
                details.additionalDetails &&
                details.additionalDetails.bedrooms
                  ? details.additionalDetails.bedrooms
                  : "N/A"}
              </p>
            </div>
            <div className="info text-center">
              <h2 className="font-medium text-black-400 capitalize mb-2">
                Bathroom
              </h2>
              <p className="text-gray-600 font-normal capitalize">
                <i className="ri-home-line me-2"></i>
                {details &&
                details.additionalDetails &&
                details.additionalDetails.bathrooms
                  ? details.additionalDetails.bathrooms
                  : "N/A"}
              </p>
            </div>
            <div className="info text-center">
              <h2 className="font-medium text-black-400 capitalize mb-2">
                Square Area
              </h2>
              <p className="text-gray-600 font-normal capitalize">
                <i className="ri-home-line me-2"></i>
                {details &&
                details.additionalDetails &&
                details.additionalDetails.area
                  ? details.additionalDetails.area
                  : "N/A"}
              </p>
            </div>
            <div className="info text-center">
              <h2 className="font-medium text-black-400 capitalize mb-2">
                Repair Quality
              </h2>
              <p className="text-gray-600 font-normal capitalize">
                <i className="ri-home-line me-2"></i>
                {details &&
                details.additionalDetails &&
                details.additionalDetails.repairQuality
                  ? details.additionalDetails.repairQuality
                  : "N/A"}
              </p>
            </div>
            <div className="info text-center">
              <h2 className="font-medium text-black-400 capitalize mb-2">
                Status
              </h2>
              <p className="text-gray-600 font-normal capitalize">
                <i className="ri-checkbox-circle-line me-2"></i>
                {details &&
                details.additionalDetails &&
                details.additionalDetails.status
                  ? details.additionalDetails.status
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="about-description my-3 border-b-2 py-5">
            <h1 className="black-light-color font-medium text-3xl mb-4 capitalize">
              About home
            </h1>
            <div
              className="text-gray-500"
              dangerouslySetInnerHTML={{ __html: details.description }}
            ></div>
            <div className="my-5  listed-info flex w-full  items-end rounded-md shadow-sm  border-2  bg-gray-50 p-3 py-5">
              <div className="md:w-1/2 px-4 lg:w-1/2 xxl:w-1/2">
                <p className="text-gray-700 font-medium mb-3">
                  Listed by property owner
                </p>
                <div className="col-span-1 flex">
                  <img
                    className="h-10 w-10 bg-gray-300 rounded-full object-cover me-2"
                    src={details && details.listedBy && details.listedBy.img}
                    alt={details && details.listedBy && details.listedBy.name}
                  />
                  <div className="col-span-1">
                    <h2 className="text-dark-400 font-medium text-md">
                      {details && details.listedBy && details.listedBy.name}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      {details &&
                        details.listedBy &&
                        details.listedBy.designation}
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 lg:w-1/2 xxl:w-1/2  button-group justify-end items-end flex space-x-3">
                <Button variant="bg-gray-200 text-primary-color font-medium rounded">
                  Ask question
                </Button>
                <Button variant="bg-gray-200 text-primary-color font-medium rounded">
                  <i className="ri-question-line me-1"></i>Get more Info
                </Button>
              </div>
            </div>
          </div>
          <div className="rental-features border-b-2 my-3 py-5">
            <h2 className="text-2xl black-light-color font-medium mb-2">
              Rental Features
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {details &&
                details.RentalFeature.map((feature, index) => (
                  <div
                    className="grid grid-cols-2 col-span-1 items-center"
                    key={index}
                  >
                    <h2 className="text-lg text-gray-400 font-normal capitalize">
                      {feature.key}
                    </h2>
                    <p className="text-lg text-gray-700 font-medium capitalize">
                      {feature.value}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className="rental-history border-b-2 my-3 py-5">
            <h2 className="text-2xl black-light-color font-medium mb-2">
              Rental Price History for {details.propertyName}
            </h2>
            <div className="relative overflow-x-auto">
              <Table>
                <TableHead variant="text-gray-700 bg-gray-100 font-normal text-md">
                  <TableRow>
                    <TableHeaderCell>Date</TableHeaderCell>
                    <TableHeaderCell>Price</TableHeaderCell>
                    <TableHeaderCell>Event</TableHeaderCell>
                    <TableHeaderCell>Source</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {details &&
                    details.RentPriceHistoryAndBeverlySpringfield.map(
                      (val, i) => (
                        <TableRow key={i}>
                          <TableCell>
                            <span className="text-gray-400">{val.date}</span>
                          </TableCell>
                          <TableCell>${val.price}</TableCell>
                          <TableCell>{val.event}</TableCell>
                          <TableCell>{val.source}</TableCell>
                        </TableRow>
                      )
                    )}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="property-map border-b-2 my-3 py-5 h-1/6">
            <h2 className="text-2xl black-light-color font-medium mb-3">Map</h2>
            <div className="map-container overflow-hidden h-1/6  md:h-full w-full relative">
              <MapView
                position={details && details.locationCoordinates}
                mapStyles={MapStyles.propertyDetailedMap}
              />
            </div>
          </div>
          <div className="more-listings border-b-2 my-3 py-5">
            <p className="font-medium text-primary-color text-md my-2 cursor-pointer">
              See more listings in {details && details.propertyName}
              <i className="ri-arrow-right-s-line ms-1 font-medium"></i>
            </p>
          </div>
          <div className="property-terms my-3 py-5">
            <p className="text-gray-600">{details.termsPolicy}</p>
          </div>
        </div>
        <div className="md:w-full md:mb-4 px-4 lg:w-1/3 xxl:w-1/3 lg:order-2 md:order-1">
          <div className="price-container border-2 shadow-md px-4 py-6">
            <div className="apply-section border-b-2">
              <span>Rent price</span>
              <h1 className="text-lg text-primary-color font-medium">
                {details.additionalDetails.price}
                <span className="text-neutral-400 text-sm">/month</span>
              </h1>
              <Button variant="bg-primary-color text-white w-full rounded-md py-2 my-2 hover:shadow-lg">< i className="ri-article-line"></i> Apply Now</Button>

            </div>
            <div className="tour-request py-2">
            <h2 className="text-gray-700 font-semibold text-xl my-3">Request a home tour</h2>
            <div className="request-tour flex space-x-3">
              <Button variant="text-gray-600 border-2 hover:shadow-md hover:bg-[#E8E6F9] hover:border-primary-color hover:text-primary-color w-full rounded-md py-2"><i className="ri-home-line text-inherit"></i> In Person</Button>
              <Button variant="text-gray-600 border-2 hover:shadow-md hover:bg-[#E8E6F9] hover:border-primary-color hover:text-primary-color w-full rounded-md py-2"><i className="ri-vidicon-line"></i> Virtual</Button>
            </div>
            <Button variant="pointer text-gray-600 border-2 text-white bg-[#100A55] w-full rounded-md py-2 my-3 hover:shadow-lg"><i className="ri-map-pin-line"></i> Request a tour</Button>
            <span className="text-gray-300 text-sm">It's free, with no obligation - cancel anytime.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
