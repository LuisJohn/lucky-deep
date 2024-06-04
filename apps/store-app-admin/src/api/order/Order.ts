import { Box } from "../box/Box";
import { User } from "../user/User";

export type Order = {
  address: string | null;
  box?: Box | null;
  createdAt: Date;
  deliveryStatus?: "Option1" | null;
  id: string;
  orderDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
