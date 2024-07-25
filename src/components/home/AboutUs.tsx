import React from "react";
import Navbar from "../common/Navbar";

const AboutUs: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            We Offer Comprehensive Vehicle Rental Solutions
          </h1>
          <p className="text-lg text-gray-700">
            At AutoRent, we provide a full range of vehicle rental services,
            ensuring our clients have the best experience possible. We tailor
            our services to meet each customer's needs, whether it's short-term
            rentals, long-term leases, or fleet management. Our goal is to offer
            convenience, flexibility, and reliability.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Fleet Management (90%)
            </h2>
            <div className="relative h-4 bg-gray-300 rounded-full">
              <div
                id="comm1"
                className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Customer Service (85%)
            </h2>
            <div className="relative h-4 bg-gray-300 rounded-full">
              <div
                id="comm2"
                className="absolute top-0 left-0 h-4 bg-green-500 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Vehicle Maintenance (70%)
            </h2>
            <div className="relative h-4 bg-gray-300 rounded-full">
              <div
                id="comm3"
                className="absolute top-0 left-0 h-4 bg-yellow-500 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </section>

        <section
          id="fourth"
          className="reveal mb-16 bg-blue-700 text-white p-8 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">SERVICE INDEX</h2>
          <h1 className="text-4xl font-bold mb-8">
            Real-Time Monitoring and Management of Your Vehicle Fleet
          </h1>
          <div id="fourth_cards" className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: "https://cdn.iconscout.com/icon/premium/png-64-thumb/fleet-management-3410492-2853651.png",
                label: "FLEET MANAGEMENT",
              },
              {
                src: "https://cdn.iconscout.com/icon/premium/png-64-thumb/customer-service-2853667-2372618.png",
                label: "CUSTOMER SERVICE",
              },
              {
                src: "https://cdn.iconscout.com/icon/premium/png-64-thumb/vehicle-maintenance-2372623.png",
                label: "VEHICLE MAINTENANCE",
              },
              {
                src: "https://cdn.iconscout.com/icon/premium/png-64-thumb/reservation-system-3285486-2732783.png",
                label: "RESERVATION SYSTEM",
              },
              {
                src: "https://cdn.iconscout.com/icon/premium/png-64-thumb/tracking-system-3285485-2732782.png",
                label: "TRACKING SYSTEM",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <img src={item.src} alt={item.label} className="mx-auto mb-2" />
                <p className="text-lg font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="second" className="reveal mb-16">
          {[
            {
              title: "OUR SERVICES",
              subtitle: "Comprehensive Vehicle Rental",
              text: "We offer a vast selection of vehicles to meet your rental needs, from compact cars to SUVs and luxury vehicles. Our flexible rental options ensure you get the vehicle you need, when you need it.",
              img: "https://cdni.iconscout.com/illustration/premium/thumb/car-rental-service-2852677-2372734.png",
            },
            {
              title: "OUR PARTNERS",
              subtitle: "Global Network",
              text: "Our global network spans 12 countries, allowing us to provide top-notch rental services wherever you are. Many of our clients are repeat customers, thanks to our reliable and highly recommended services.",
              img: "https://cdni.iconscout.com/illustration/premium/thumb/global-partnership-2975816-2476892.png",
            },
            {
              title: "OUR COMMITMENT",
              subtitle: "Affordable Quality",
              text: "We adhere to the principle of providing the same high-quality service at significantly lower costs. Our efficient operations and strategic partnerships ensure you get the best value for your money.",
              img: "https://cdni.iconscout.com/illustration/premium/thumb/affordable-services-2476893-2975817.png",
            },
            {
              title: "OUR ADVANTAGE",
              subtitle: "Advanced Technology and Skilled Team",
              text: "We leverage cutting-edge technology and a dedicated team to provide seamless vehicle rental services. Our system ensures smooth operations, from booking to vehicle tracking and maintenance.",
              img: "https://cdni.iconscout.com/illustration/premium/thumb/advanced-technology-2476894-2975818.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="container bg-white shadow-md rounded-lg p-8 mb-8 flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl font-bold text-blue-600 mb-2">
                  {item.title}
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {item.subtitle}
                </h2>
                <p className="text-gray-700">{item.text}</p>
              </div>
              <img
                src={item.img}
                alt=""
                className="md:w-1/2 max-w-xs mx-auto md:mx-0"
              />
            </div>
          ))}
        </section>

        <section id="third" className="reveal text-center mb-16">
          <h3 className="text-2xl font-semibold mb-4">OUR PROCESS</h3>
          <h1 className="text-4xl font-bold mb-8">
            Streamlining Your Vehicle Rental Experience
          </h1>
          <div id="third_cards" className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Services Guaranteed",
                text: "We provide end-to-end vehicle rental services, ensuring a seamless experience from booking to return.",
              },
              {
                title: "Innovative Solutions for Future Needs",
                text: "Our advanced technology ensures your rental experience is smooth, efficient, and future-proof.",
              },
              {
                title: "Consistent Success in Every Transaction",
                text: "Our commitment to quality and reliability ensures every rental transaction is successful and satisfying.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
