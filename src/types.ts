export interface TVehicleSpecs {
  manufacturer: string;
  model: string;
  year: number;
  fuel_type: string;
  engine_capacity: string;
  transmission: string;
  seating_capacity: number;
  color: string;
  features: string;
}

export interface TVehicle {
  vehicle_id: number;
  vehicle_image: string;
  rental_rate: number;
  availability: boolean;
  vehicleSpec: TVehicleSpecs;
}

export interface TUser {
  user_id: number;
  full_name: string;
  email: string;
  contact_phone: string;
  address: string;
  role: string;
  password: string;
  Image_url: string;
}

export interface TLocation {
  location_id: number;
  name: string;
  address: string;
  contact_phone: string;
}

export interface TFleet {
  depreciation_rate: number;
  fleet_id: number;
  vehicle_id: number;
  acquisition_date: string;
  acquisition_price: number;
  current_value: number;
  maintenance_cost: number;
  status: string;
}

export interface TBooking {
  booking_id: number;
  user_id: number;
  location_id: number;
  vehicle_id: number;
  booking_date: string;
  return_date: string;
  total_amount: number;
  booking_status: "Completed" | "Pending" | "Cancelled";
  created_at: string;
  updated_at: string;
  vehicle: TVehicle;
  location: TLocation;
  payments: TPayment;
}

export interface TLogin {
  email: string;
  password: string;
}

export interface TRegister {
  full_name: string;
  email: string;
  contact_phone: string;
  address: string;
  password: string;
  role: string;
}

export interface TCustomerSupport {
  ticket_id: number;
  user_id: number;
  subject: string;
  description: string;
  status: string;
  user: TUser;
}

export interface TPayment {
  payment_id: number;
  booking_id: number;
  amount: number;
  payment_date: string;
  payment_method: string;
  transaction_id: string;
  payment_status: "Completed" | "Pending" | "Refunded";
  created_at: string;
  updated_at: string;
  url: string;
}
