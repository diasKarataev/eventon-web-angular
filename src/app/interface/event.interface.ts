export interface Event {
  _id: string;
  title: string;
  description: string;
  date: Date;
  ticket_price: number;
  capacity: number;
  imagesIds?: string[];
  city: string;
  map_latitude: number;
  map_longitude: number;
}
