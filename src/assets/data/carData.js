// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Suzuki",
    rating: 112,
    carName: "Creta",
    imgUrl: img01,
    model: "2022",
    price: 3500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " SX (O) 1.5 Diesel is powered by a 1493 cc Diesel engine mated to a 6 Gears speed Manual gearbox which generates 113 bhp of power & 250 Nm of torque. ",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Crysta",
    imgUrl: img02,
    model: "2022",
    price: 4500,
    speed: "12kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Innova Crysta 2020-2022 2.4 ZX 7 STR AT Overview ; Engine (upto), 2393 cc ; Power, 148.0 bhp ; Seating Capacity, 7 ; Transmission, Automatic ; Fuel, Diesel ",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "M5 competition",
    imgUrl: img03,
    model: "Model-2022",
    price: 8500,
    speed: "10kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " M Series M5 Competition Overview ; Engine (upto), 4395 cc ; Power, 616.87 bhp ; Transmission, Automatic ; Mileage (upto), 9.8 kmpl ; Fuel, Petrol .",
  },



  {
    id: 4,
    brand: "Kia",
    rating: 119,
    carName: "Carnival",
    imgUrl: img06,
    model: "Model-2022",
    price: 8500,
    speed: "14.11kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Kia Carnival is only available with a 2.2L Turbo Diesel engine and a 8-speed TC transmission. This engine makes 200PS of power at 3800rpm and 440Nm",
  },

  {
    id: 5,
    brand: "Audi",
    rating: 82,
    carName: "A6",
    imgUrl: img07,
    model: "Model 2022",
    price: 5000,
    speed: "14kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Audi A6 Specifications ; Engine Type, Inline 4-Cylinder Engine ; Displacement (CC), 1,984 CC ; No. of Cylinder, 4 ; Power, 241 bhp@5000-6500 rpm ; Torque, 370 Nm",
  },


];

export default carData;
