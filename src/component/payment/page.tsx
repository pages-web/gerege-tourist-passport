"use client";
import React, { useState, useTransition } from "react";
import Modal from "./modal/page";
import PaymentComponent from "./payment-component/page";
import BuyButton from "./buy-button/page";

const PayemntBasicPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleOpenModal = () => setIsModalVisible(true);
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
