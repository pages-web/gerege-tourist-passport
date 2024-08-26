"use client";
import React, { useEffect, useState, useTransition } from "react";
import Modal from "./modal/page";
import PaymentComponent from "./payment-component/page";
import BuyButton from "./buy-button/page";
import { useCurrentUser } from "@/sdk/queries/auth.client";
import { redirect, useRouter } from "next/navigation";

const PayemntBasicPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPending, startTransition] = useTransition();
  const user = useCurrentUser();
  const router = useRouter();

  const handleOpenModal = () => {
    router.push(user.currentUser ? "/address" : "/login");
  };
  const handleCloseModal = () => setIsModalVisible(false);

  return (
    <div>
      <BuyButton onClick={handleOpenModal} />
      <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
        <PaymentComponent
          isVisible={isModalVisible}
          onClose={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export default PayemntBasicPage;
