type UserItem = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

type Review = {
  author: string;
  score: number;
  comment: string;
};

type BarberItem = {
  id: string;
  firstName: string;
  lastName: string;
  rating: number;
  review: Review[];
  description: string;
  price: number;
};

type DashboardState = {
  barbers: BarberItem[] | null;
  selectedBarber: BarberItem | null;
  loading: boolean;
  error: any;
};
