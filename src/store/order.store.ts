import { IDeliveryInfo, IOrder, IBillType } from "@/types/order.types";
import { atom } from "jotai";
import { focusAtom } from "jotai-optics";
import { splitAtom } from "jotai/utils";
import { currentUserAtom, deliveryItemIdAtom } from "./auth.store";

export const defaultOrderItem = {
  items: [],
  deliveryInfo: null,
  description: "",
};
export const activeOrderAtom = atom<
  | IOrder
  | {
      items: [];
      deliveryInfo: null;
      description: string;
      billType: IBillType;
      registerNumber?: string;
    }
>({
  items: [],
  deliveryInfo: null,
  description: "",
  billType: "1",
  registerNumber: "",
});

export const orderParamsAtom = atom((get) => {
  const {
    items,
    registerNumber,
    billType,
    description,
    deliveryInfo,
    branchId,
    _id,
    saleStatus,
  } = get(activeOrderAtom) as IOrder;
  const totalAmount = 55;
  const customerId = get(currentUserAtom)?.erxesCustomerId;
  const deliveryProductId = get(deliveryItemIdAtom);

  return {
    _id,
    items: items
      .filter((item) => item.productId !== deliveryProductId)
      .map(({ _id, count, productId, unitPrice }) => ({
        _id,
        count,
        productId,
        unitPrice,
      })),
    totalAmount,
    type: "delivery",
    customerId,
    registerNumber,
    billType,
    origin: "kiosk",
    deliveryInfo,
    description,
    branchId,
    saleStatus,
  };
});

export const initialLoadingOrderAtom = atom<boolean>(true);
export const loadingOrderAtom = atom<boolean>(false);

export const cudOrderAtom = atom<boolean>(false);

export const itemsAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("items")
);

export const filterDeliveryProduct = (
  items: IOrder["items"],
  deliveryProductId?: string
) => items.filter((item) => item.productId !== deliveryProductId);

export const getDeliveryProduct = (
  items: IOrder["items"],
  deliveryProductId?: string
) => items.find((item) => item.productId === deliveryProductId);

export const productItemsAtom = atom((get) =>
  filterDeliveryProduct(get(itemsAtom), get(deliveryItemIdAtom))
);

export const deliveryItemAtom = atom((get) =>
  getDeliveryProduct(get(itemsAtom), get(deliveryItemIdAtom))
);

export const billTypeAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("billType")
);

export const registerNumberAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("registerNumber")
);

export const deliveryInfoAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("deliveryInfo")
);

export const descriptionAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("description")
);

export const changeDeliveryInfoAtom = atom(
  (get) => get(loadingOrderAtom),
  (
    get,
    set,
    payload: IDeliveryInfo & { registerNumber?: string; billType: IBillType }
  ) => {
    const { billType, registerNumber, ...v } = payload;
    const params = {
      description: `
        Нэр: ${v.firstName},
        ${v.lastName && `Овог: ${v.lastName},`}
        Утасны дугаар: ${v.phone},
        И-Мэйл хаяг: ${v.email},
        ------------------------- 
      `,
      deliveryInfo: v,
      billType,
      registerNumber: billType === "3" ? registerNumber : "",
    };

    if (
      get(descriptionAtom) !== params.description ||
      get(registerNumberAtom) !== registerNumber ||
      get(billTypeAtom) !== billType
    ) {
      set(cudOrderAtom, true);
      set(activeOrderAtom, (prev) => ({ ...(prev as IOrder), ...params }));
    }
  }
);

export const itemAtomsAtom = splitAtom(itemsAtom);
