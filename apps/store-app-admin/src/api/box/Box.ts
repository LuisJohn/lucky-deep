import { Order } from "../order/Order";
import { Transaction } from "../transaction/Transaction";

export type Box = {
  content: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isRevealed: boolean | null;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
