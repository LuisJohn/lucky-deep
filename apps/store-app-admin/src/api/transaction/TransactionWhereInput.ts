import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BoxWhereUniqueInput } from "../box/BoxWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  box?: BoxWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  transactionType?: "Option1";
  user?: UserWhereUniqueInput;
};
