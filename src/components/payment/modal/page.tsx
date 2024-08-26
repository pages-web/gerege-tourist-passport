"use client";
import React, { useEffect, useRef } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className="w-full h-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
      style={{ zIndex: 9999 }}
    >
      <div className="bg-white p-4 rounded-lg" ref={modalContentRef}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
