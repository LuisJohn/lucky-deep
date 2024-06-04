import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { BOX_TITLE_FIELD } from "../box/BoxTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <ReferenceField label="Box" source="box.id" reference="Box">
          <TextField source={BOX_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DeliveryStatus" source="deliveryStatus" />
        <TextField label="ID" source="id" />
        <TextField label="OrderDate" source="orderDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
