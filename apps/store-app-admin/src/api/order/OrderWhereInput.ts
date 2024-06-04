import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BoxWhereUniqueInput } from "../box/BoxWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  address?: StringNullableFilter;
  box?: BoxWhereUniqueInput;
  deliveryStatus?: "Option1";
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
