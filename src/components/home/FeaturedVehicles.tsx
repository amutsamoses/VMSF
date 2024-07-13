import React from "react";
import "./featuredVehicle.scss";

interface Car {
  name: string;
  model: string;
  enginePower: string;
  year: number;
  company: string;
  rentalRate: number;
  availability: boolean;
  imageUrl: string; // Add this property for the image URL
}

const cars: Car[] = [
  {
    name: "Model S",
    model: "S",
    enginePower: "670 hp",
    year: 2022,
    company: "Tesla",
    rentalRate: 150,
    availability: true,
    imageUrl: "path/to/tesla-model-s.jpg",
  },
  {
    name: "Mustang",
    model: "GT",
    enginePower: "450 hp",
    year: 2021,
    company: "Ford",
    rentalRate: 120,
    availability: false,
    imageUrl: "path/to/ford-mustang.jpg",
  },
  {
    name: "Civic",
    model: "EX",
    enginePower: "158 hp",
    year: 2020,
    company: "Honda",
    rentalRate: 80,
    availability: true,
    imageUrl: "path/to/honda-civic.jpg",
  },
  {
    name: "Camry",
    model: "SE",
    enginePower: "203 hp",
    year: 2021,
    company: "Toyota",
    rentalRate: 90,
    availability: true,
    imageUrl: "path/to/toyota-camry.jpg",
  },
  {
    name: "A4",
    model: "Premium",
    enginePower: "201 hp",
    year: 2022,
    company: "Audi",
    rentalRate: 140,
    availability: false,
    imageUrl: "path/to/audi-a4.jpg",
  },
  {
    name: "3 Series",
    model: "330i",
    enginePower: "255 hp",
    year: 2022,
    company: "BMW",
    rentalRate: 160,
    availability: true,
    imageUrl: "path/to/bmw-3-series.jpg",
  },
  {
    name: "Cherokee",
    model: "Trailhawk",
    enginePower: "271 hp",
    year: 2021,
    company: "Jeep",
    rentalRate: 110,
    availability: true,
    imageUrl: "path/to/jeep-cherokee.jpg",
  },
  {
    name: "Accord",
    model: "Sport",
    enginePower: "192 hp",
    year: 2021,
    company: "Honda",
    rentalRate: 95,
    availability: false,
    imageUrl: "path/to/honda-accord.jpg",
  },
  {
    name: "Altima",
    model: "SV",
    enginePower: "188 hp",
    year: 2020,
    company: "Nissan",
    rentalRate: 85,
    availability: true,
    imageUrl: "path/to/nissan-altima.jpg",
  },
  {
    name: "RX",
    model: "350",
    enginePower: "295 hp",
    year: 2021,
    company: "Lexus",
    rentalRate: 130,
    availability: true,
    imageUrl: "path/to/lexus-rx.jpg",
  },
  {
    name: "Golf",
    model: "GTI",
    enginePower: "241 hp",
    year: 2022,
    company: "Volkswagen",
    rentalRate: 115,
    availability: true,
    imageUrl: "path/to/vw-golf.jpg",
  },
  {
    name: "Impala",
    model: "LT",
    enginePower: "305 hp",
    year: 2020,
    company: "Chevrolet",
    rentalRate: 100,
    availability: false,
    imageUrl: "path/to/chevrolet-impala.jpg",
  },
];

const FeaturedVehicles: React.FC = () => {
  return (
    <div className="grid-container">
      {cars.map((car, index) => (
        <div key={index} className="car-card">
          <img src={car.imageUrl} alt={`${car.name} ${car.model}`} />
          <h3>{car.name}</h3>
          <p>Model: {car.model}</p>
          <p>Engine Power: {car.enginePower}</p>
          <p>Year: {car.year}</p>
          <p>Company: {car.company}</p>
          <p>Rental Rate: ${car.rentalRate}/day</p>
          <p
            className={`$"availability" ${!car.availability ? "not-available" : ""}`}
          >
            Availability: {car.availability ? "Available" : "Not Available"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedVehicles;
