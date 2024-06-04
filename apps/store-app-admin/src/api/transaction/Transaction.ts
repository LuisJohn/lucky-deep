import { Box } from "../box/Box";
import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  box?: Box | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  transactionType?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
