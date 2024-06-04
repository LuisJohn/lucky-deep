import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  accountBalance?: number | null;
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
