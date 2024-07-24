import React from "react";
import "./featuredVehicle.scss";

interface Car {
  name: string;
  model: string;
  enginePower: string;
  year: number;
  company: string;
  imageUrl: string;
}

const cars: Car[] = [
  {
    name: "Model S",
    model: "S",
    enginePower: "670 hp",
    year: 2022,
    company: "Tesla",
    imageUrl:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Mustang",
    model: "GT",
    enginePower: "450 hp",
    year: 2021,
    company: "Ford",
    imageUrl:
      "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Civic",
    model: "EX",
    enginePower: "158 hp",
    year: 2020,
    company: "Honda",
    imageUrl:
      "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Camry",
    model: "SE",
    enginePower: "203 hp",
    year: 2021,
    company: "Toyota",
    imageUrl:
      "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "A4",
    model: "Premium",
    enginePower: "201 hp",
    year: 2022,
    company: "Audi",
    imageUrl:
      "https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "3 Series",
    model: "330i",
    enginePower: "255 hp",
    year: 2022,
    company: "BMW",
    imageUrl:
      "https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Cherokee",
    model: "Trailhawk",
    enginePower: "271 hp",
    year: 2021,
    company: "Jeep",
    imageUrl:
      "https://images.pexels.com/photos/225841/pexels-photo-225841.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Accord",
    model: "Sport",
    enginePower: "192 hp",
    year: 2021,
    company: "Honda",
    imageUrl:
      "https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Altima",
    model: "SV",
    enginePower: "188 hp",
    year: 2020,
    company: "Nissan",
    imageUrl:
      "https://images.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "RX",
    model: "350",
    enginePower: "295 hp",
    year: 2021,
    company: "Lexus",
    imageUrl:
      "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Golf",
    model: "GTI",
    enginePower: "241 hp",
    year: 2022,
    company: "Volkswagen",
    imageUrl:
      "https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Impala",
    model: "LT",
    enginePower: "305 hp",
    year: 2020,
    company: "Chevrolet",
    imageUrl:
      "https://images.pexels.com/photos/849835/pexels-photo-849835.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const FeaturedVehicles: React.FC = () => {
  return (
    <div className="featured-vehicles">
      <div className="heading text-center my-8">
        <h2 className="text-3xl font-bold text-blue-600">Featured Vehicles</h2>
        <p className="text-lg text-green-700 mt-2">
          Discover our range of top-quality vehicles available for rental. We
          offer a wide variety of cars to meet your needs, from high-performance
          sports cars to reliable family vehicles.
        </p>
      </div>
      <div className="grid-container">
        {cars.map((car, index) => (
          <div key={index} className="car-card">
            <img
              src={car.imageUrl}
              alt={`${car.name} ${car.model}`}
              className="w-full h-40 object-cover rounded-md"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p>Model: {car.model}</p>
              <p>Engine Power: {car.enginePower}</p>
              <p>Year: {car.year}</p>
              <p>Company: {car.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedVehicles;
