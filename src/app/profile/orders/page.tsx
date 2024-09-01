import FullOrders from "@/containers/orders/full-orders";
import ProfileLayout from "../profile-layout";
import { Suspense } from "react";

const Orders = () => {
  return (
    <ProfileLayout title="Your orders" description="">
      <div className="space-y-3">
        <Suspense>
          <FullOrders />
        </Suspense>
      </div>
    </ProfileLayout>
  );
};

export default Orders;
