export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Restaurant {
  id: number;
  name: string;
  rating: number;
  deliveryTime: string;
  image: string;
}

export interface Food {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}
