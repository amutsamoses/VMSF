import "./whyus.scss";
import { Phone, BadgePercent, MapPin } from "lucide-react";

const WhyUs = () => {
  return (
    <div className="why-us-container">
      <div className="image-container">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
          style={{ marginTop: "50px" }}
          alt=""
        />
      </div>
      <div className="content-container">
        <h2>Why choose us</h2>
        <div className="reason">
          <Phone className="icon" />
          <div className="reason-text">
            <h3>Customer Support</h3>
            <p>
              Our customer support works for you 7/24 and we are always happy to
              answer all your questions.
            </p>
          </div>
        </div>
        <div className="reason">
          <BadgePercent className="icon" />
          <div className="reason-text">
            <h3>Best Price Guaranteed</h3>
            <p>
              We guarantee the best price for the rental of all cars from our
              fleet. We also provide discounts for regular customers.
            </p>
          </div>
        </div>
        <div className="reason">
          <MapPin className="icon" />
          <div className="reason-text">
            <h3>Many Locations</h3>
            <p>
              Many locations in different cities and countries, as well as car
              delivery to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
