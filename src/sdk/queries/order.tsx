import {
  type OperationVariables,
  useQuery,
  useLazyQuery,
} from "@apollo/client";
import { queries, subscriptions } from "../graphql/order";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { currentUserAtom } from "@/store/auth.store";
import {
  initialLoadingOrderAtom,
  loadingOrderAtom,
  activeOrderAtom,
} from "@/store/order.store";
import { defaultOrderItem, cudOrderAtom } from "@/store/order.store";
import { OrderItem } from "@/types/order.types";
import { useEffect, useMemo } from "react";
import { ORDER_SALE_STATUS, ORDER_STATUSES } from "@/lib/constants";
import { onError } from "@/lib/utils";
import { refetchOrderDetailAtom } from "@/store/payment.store";

const useCurrentOrder = () => {
  const { erxesCustomerId } = useAtomValue(currentUserAtom) || {};
  const setCurrentAtom = useSetAtom(activeOrderAtom);
  const setLoadingOrder = useSetAtom(loadingOrderAtom);
  const setInitialLoadingOrder = useSetAtom(initialLoadingOrderAtom);
  const setTriggerCRUD = useSetAtom(cudOrderAtom);

  const { data, error, loading } = useQuery(queries.currentOrder, {
    variables: {
      customerId: erxesCustomerId,
      statuses: ORDER_STATUSES.ALL,
      saleStatus: ORDER_SALE_STATUS.CART,
      perPage: 1,
      page: 1,
      sortField: "createdAt",
      sortDirection: -1,
    },
    skip: !erxesCustomerId,
  });

  const fullOrders = useMemo(() => data?.fullOrders, [data]);

  useEffect(() => {
    if (fullOrders) {
      const currentOrder = (fullOrders || [])[0];
      setLoadingOrder(false);
      setInitialLoadingOrder(false);
      setTriggerCRUD(false);
      setCurrentAtom(currentOrder || defaultOrderItem);
    }
  }, [fullOrders]);

  const currentOrder = (fullOrders || [])[0];

  return { loading, currentOrder, error };
};

const syncCarts = (localCart: OrderItem[], items: OrderItem[]) => {
  const synchronizedCart = localCart.map((localItem) => {
    const matchingSavedItem = items.find(
      (savedItem) => savedItem.productId === localItem.productId
    );
    if (matchingSavedItem) {
      // If the product exists in the saved cart, update the count by summing the values
      return { ...localItem, count: localItem.count + matchingSavedItem.count };
    } else {
      return localItem;
    }
  });

  items.forEach((savedItem) => {
    const isAlreadyInLocalCart = synchronizedCart.some(
      (localItem) => localItem.productId === savedItem.productId
    );
    if (!isAlreadyInLocalCart) {
      synchronizedCart.push(savedItem);
    }
  });

  return synchronizedCart;
};

export const useFullOrders = (props?: { variables?: OperationVariables }) => {
  const { variables } = props || {};
  const { erxesCustomerId } = useAtomValue(currentUserAtom) || {};
  const { data, loading, refetch } = useQuery(queries.fullOrders, {
    variables: {
      customerId: erxesCustomerId,
      statuses: ORDER_STATUSES.ALL,
      saleStatus: ORDER_SALE_STATUS.CONFIRMED,
      sortField: "createdAt",
      sortDirection: -1,
      ...variables,
    },
    onError,
    skip: !erxesCustomerId,
  });

  const fullOrders = useMemo(() => data?.fullOrders, [data]);

  return { fullOrders, loading, refetch };
};

export const useOrderDetail = (id: string) => {
  const { erxesCustomerId } = useAtomValue(currentUserAtom) || {};
  const [refetchOrder, setRefetchOrder] = useAtom(refetchOrderDetailAtom);
  const { data, loading, refetch } = useQuery(queries.orderDetail, {
    variables: {
      customerId: erxesCustomerId,
      id,
    },
    onCompleted() {
      setRefetchOrder(false);
    },
    onError,
  });

  const { orderDetail } = data || {};
  const { _id } = orderDetail || {};

  useEffect(() => {
    if (_id && refetchOrder) {
      refetch();
    }
  }, [_id, refetchOrder]);

  return { orderDetail, loading };
};

export const useCheckRegister = (onCompleted?: (name: string) => void) => {
  const [checkRegister, { loading }] = useLazyQuery(
    queries.ordersCheckCompany,
    {
      onError,
      onCompleted(data) {
        const { found, name } = (data || {}).ordersCheckCompany || {};

        onCompleted && onCompleted(!found ? "" : name || "Demo company");
      },
    }
  );
  return { checkRegister, loading };
};

export default useCurrentOrder;
