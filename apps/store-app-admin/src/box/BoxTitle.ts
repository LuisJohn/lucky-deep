import { Box as TBox } from "../api/box/Box";

export const BOX_TITLE_FIELD = "name";

export const BoxTitle = (record: TBox): string => {
  return record.name?.toString() || String(record.id);
};
