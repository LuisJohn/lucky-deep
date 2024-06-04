import { BoxWhereUniqueInput } from "../box/BoxWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  address?: string | null;
  box?: BoxWhereUniqueInput | null;
  deliveryStatus?: "Option1" | null;
  orderDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
