import { SortOrder } from "../../util/SortOrder";

export type BoxOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isRevealed?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
