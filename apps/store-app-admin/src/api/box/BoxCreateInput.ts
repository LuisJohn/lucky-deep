import { OrderCreateNestedManyWithoutBoxesInput } from "./OrderCreateNestedManyWithoutBoxesInput";
import { TransactionCreateNestedManyWithoutBoxesInput } from "./TransactionCreateNestedManyWithoutBoxesInput";

export type BoxCreateInput = {
  content?: string | null;
  description?: string | null;
  isRevealed?: boolean | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutBoxesInput;
  price?: number | null;
  transactions?: TransactionCreateNestedManyWithoutBoxesInput;
};
