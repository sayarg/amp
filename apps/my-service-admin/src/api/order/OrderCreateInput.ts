import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  anotherOne?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  history?: string | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
