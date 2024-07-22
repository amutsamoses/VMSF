import React from "react";
import "tailwindcss/tailwind.css";

const AboutUs: React.FC = () => {
  return (
    <main className="bg-gray-900 text-white font-bold">
      <div id="first" className="reveal flex flex-col items-center p-8">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
          alt="Innovative Solutions"
          className="w-full md:w-1/2"
        />
        <div className="mt-8 text-center">
          <h1 className="text-3xl mb-4">Innovative Vehicle Rental Solutions</h1>
          <p className="mb-4">
            Our vehicle rental management system offers cutting-edge technology
            to streamline your rental business. From real-time tracking to
            seamless booking, we provide a comprehensive solution tailored to
            meet your needs.
          </p>
          <h2 className="text-2xl mb-2">Real-time Monitoring (95%)</h2>
          <div className="bg-gray-800 h-4 w-full rounded-full mb-4">
            <div
              id="comm1"
              className="bg-blue-600 h-4 rounded-full w-11/12"
            ></div>
          </div>
          <h2 className="text-2xl mb-2">Fleet Management (90%)</h2>
          <div className="bg-gray-800 h-4 w-full rounded-full mb-4">
            <div
              id="comm2"
              className="bg-blue-600 h-4 rounded-full w-10/12"
            ></div>
          </div>
          <h2 className="text-2xl mb-2">Customer Support (85%)</h2>
          <div className="bg-gray-800 h-4 w-full rounded-full mb-4">
            <div
              id="comm3"
              className="bg-blue-600 h-4 rounded-full w-9/12"
            ></div>
          </div>
        </div>
      </div>

      <div id="fourth" className="reveal text-center p-8">
        <h2 className="text-2xl mb-2">TECHNOLOGY INDEX</h2>
        <h1 className="text-3xl mb-4">
          Real-Time Monitoring and Branded Digital Solutions
        </h1>
        <div id="fourth_cards" className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
              alt="Data Analytics"
              className="mb-2"
            />
            <p>Data Analytics</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
              alt="UI/UX Design"
              className="mb-2"
            />
            <p>UI/UX Design</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
              alt="Web Development"
              className="mb-2"
            />
            <p>Web Development</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
              alt="Q&A Testing"
              className="mb-2"
            />
            <p>Q&A Testing</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
              alt="Dedicated Team"
              className="mb-2"
            />
            <p>Dedicated Team</p>
          </div>
        </div>
      </div>

      <div id="second" className="reveal p-8">
        <div className="container flex flex-wrap justify-around mb-8">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl mb-4">We Provide</h1>
            <h2 className="text-xl mb-2">Remote Monitoring</h2>
            <p>
              Our system offers remote monitoring capabilities, ensuring you can
              manage your fleet from anywhere. Solve your operational challenges
              with our advanced tracking and management tools.
            </p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
            alt="Remote Monitoring"
            className="w-full md:w-1/2 p-4"
          />
        </div>
        <div className="container flex flex-wrap justify-around mb-8">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl mb-4">We Have</h1>
            <h2 className="text-xl mb-2">Global Reach</h2>
            <p>
              Our clients span across multiple countries, benefiting from our
              reliable and scalable vehicle rental solutions. Many of our
              clients come to us through high recommendations and referrals, a
              testament to our service quality.
            </p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
            alt="Global Reach"
            className="w-full md:w-1/2 p-4"
          />
        </div>
        <div className="container flex flex-wrap justify-around mb-8">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl mb-4">Our Goal</h1>
            <h2 className="text-xl mb-2">Quality at Low Cost</h2>
            <p>
              We aim to provide top-notch services at a significantly lower
              cost. Our professionals are highly skilled and experienced,
              offering the same quality as their western counterparts but at
              more attractive rates.
            </p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
            alt="Quality at Low Cost"
            className="w-full md:w-1/2 p-4"
          />
        </div>
        <div className="container flex flex-wrap justify-around mb-8">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl mb-4">Our Strengths</h1>
            <h2 className="text-xl mb-2">Intelligent Use of Technology</h2>
            <p>
              We leverage the latest technology to provide our clients with
              seamless and efficient solutions. Our approach ensures that
              physical distance and time zone differences are not a barrier to
              effective fleet management.
            </p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
            alt="Intelligent Use of Technology"
            className="w-full md:w-1/2 p-4"
          />
        </div>
      </div>

      <div id="third" className="reveal p-8 text-center">
        <h3 className="text-xl mb-2">Our Process</h3>
        <h1 className="text-3xl mb-4">Driving Results with Innovation</h1>
        <div id="third_cards" className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl mb-2">End-to-End Solutions</h2>
            <p>
              We provide comprehensive solutions that guarantee results,
              ensuring your vehicle rental operations run smoothly and
              efficiently.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl mb-2">Future-Proofing Your Fleet</h2>
            <p>
              Stay ahead of the curve with our future-proof technology that
              adapts to your growing needs, making your fleet management more
              effective.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl mb-2">Certainty in Every Project</h2>
            <p>
              Experience certainty with every project executed successfully,
              backed by our commitment to quality and innovation.
            </p>
          </div>
        </div>
      </div>

      <div id="fifth" className="reveal p-8 text-center">
        <h1 className="text-3xl mb-4">Vehicle Rental Management System</h1>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="flex items-center gap-4">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
              alt="Address"
            />
            <span>
              <h3>Address</h3>
              <p>1234 Fleet St, Mobility City, MC 56789</p>
            </span>
          </a>
          <a href="#" className="flex items-center gap-4">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
              alt="Phone"
            />
            <span>
              <h3>Phone</h3>
              <p>+1 800 123 4567</p>
            </span>
          </a>
          <a href="#" className="flex items-center gap-4">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
              alt="Email"
            />
            <span>
              <h3>Email</h3>
              <p>contact@vehiclerental.com</p>
            </span>
          </a>
        </div>
      </div>

      <footer className="flex justify-around p-8 bg-gray-800">
        <ul className="space-y-2">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
        <ul className="space-y-2">
          <li>
            <a href="#">Training</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
        <div className="text-center">
          <h2>Contact Us</h2>
          <div className="flex justify-center space-x-4 my-2">
            <a href="#">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-43-189795.png"
                alt="WhatsApp"
              />
            </a>
          </div>
          <div className="flex justify-center space-x-4 my-2">
            <a href="#">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
                alt="Telegram"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
                alt="LinkedIn"
              />
            </a>
          </div>
          <a
            href="tel:123456789"
            className="block text-white text-lg font-bold mt-4"
          >
            Telephone No: +1 800 123 4567
          </a>
        </div>
      </footer>

      <p className="text-center bg-gray-800 py-4">
        &copy; 2024 Vehicle Rental Management System. All rights reserved.
      </p>
    </main>
  );
};

export default AboutUs;
