import { BoxWhereInput } from "./BoxWhereInput";
import { BoxOrderByInput } from "./BoxOrderByInput";

export type BoxFindManyArgs = {
  where?: BoxWhereInput;
  orderBy?: Array<BoxOrderByInput>;
  skip?: number;
  take?: number;
};
