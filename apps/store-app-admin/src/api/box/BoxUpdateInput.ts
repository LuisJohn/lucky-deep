import { OrderUpdateManyWithoutBoxesInput } from "./OrderUpdateManyWithoutBoxesInput";
import { TransactionUpdateManyWithoutBoxesInput } from "./TransactionUpdateManyWithoutBoxesInput";

export type BoxUpdateInput = {
  content?: string | null;
  description?: string | null;
  isRevealed?: boolean | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutBoxesInput;
  price?: number | null;
  transactions?: TransactionUpdateManyWithoutBoxesInput;
};
