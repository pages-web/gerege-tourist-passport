import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { Input } from "@/components/ui/input";
import emailjs from "emailjs-com";

interface PaymentComponentProps {
  isVisible: boolean;
  onClose: () => void;
}

const PaymentComponent: React.FC<PaymentComponentProps> = ({
  isVisible,
  onClose,
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [currentStep, setCurrentStep] = useState("selection"); // 'selection', 'loading', 'success', 'details'
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const link = "http://sample.info/?insect=fireman&porter=attraction#cave";

  useEffect(() => {
    if (currentStep === "success") {
      const timer = setTimeout(() => {
        setCurrentStep("details");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(link).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handlePaymentClick = () => {
    setCurrentStep("loading");
    setTimeout(() => setCurrentStep("success"), 2000);
  };

  const handleSendEmail = (e: any) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        { email: email, message: "Here is the QR code you requested." },
        "YOUR_USER_ID" // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        setIsSending(false);
      })
      .catch((error) => {
        console.error("Failed to send email", error);
        setIsSending(false);
      });
  };

  if (!isVisible) return null;

  return (
    <div className="w-screen h-full fixed inset-0 flex lg:items-center top-[5%] justify-center">
      <div className="lg:w-[500px] w-[300px] h-fit mx-auto flex flex-col items-center gap-2 rounded-xl p-3 border bg-white relative">
        <div className="w-full h-fit flex items-center justify-between">
          <div className="text-[#D92D20] lg:text-[16px] text-[12px] font-semibold">
            Don’t close until pay
          </div>
          <button className="" onClick={onClose}>
            <CloseIcon className="lg:w-[20px] w-4 lg:h-[20px] h-4" />
          </button>
        </div>

        <div className="bg-[#EBFAFF] text-[#0087FF] p-1 lg:text-[12px] text-[10px] border border-[#0087FF] rounded-[6px] font-medium">
          $1 from every purchase is donated to support children with special
          needs at the 10th Kindergarten.
        </div>

        {/* Step-based rendering */}
        {currentStep === "selection" && (
          <>
            {/* Local payment */}
            <Link
              href="#"
              onClick={handlePaymentClick}
              className="w-full h-fit"
            >
              <div className="w-full h-fit flex justify-between lg:p-3 p-2 gap-2 border rounded-[8px]">
                <div className="flex flex-col lg:gap-3 gap-1">
                  <div>
                    <div className="text-gray-800 text-[15px] lg:font-bold font-medium">
                      Local Payment
                    </div>
                    <div className="text-gray-600 text-[13px] font-normal">
                      For domestic companies
                    </div>
                  </div>

                  <div className="text-[#0087FF] text-[15px] font-normal">
                    QPAY - Minepro Qpay
                  </div>
                </div>
                <div>
                  <Image
                    alt="Local payment logo"
                    src="/image/Bank logos.png"
                    width={40}
                    height={40}
                    className="lg:w-[35px] w-[30px] lg:h-[35px] h-[30px]"
                  />
                </div>
              </div>
            </Link>

            {/* Global payment */}
            <Link
              href="#"
              onClick={handlePaymentClick}
              className="w-full h-fit"
            >
              <div className="w-full h-fit flex justify-between p-3 gap-2 border rounded-[8px] mt-3">
                <div className="flex flex-col lg:gap-3 gap-1">
                  <div>
                    <div className="text-gray-800 text-[15px] lg:font-bold font-medium">
                      Global Payment
                    </div>
                    <div className="text-gray-600 text-[13px] font-normal">
                      For international companies
                    </div>
                  </div>
                  <div className="text-[#0087FF] text-[15px] font-normal">
                    VISA - Golomt bank
                  </div>
                </div>
                <div>
                  <Image
                    alt="Global payment logo"
                    src="/image/Payment method icon.png"
                    width={55}
                    height={40}
                    className="lg:w-[50px] w-[45px] lg:h-[35px] h-[30px]"
                  />
                </div>
              </div>
            </Link>
          </>
        )}

        {currentStep === "loading" && (
          <div className="w-full lg:h-[200px] h-[120px] flex flex-col items-center justify-center gap-5 border rounded-[8px]">
            <div className="spinner-container">
              <div className="spinner-box slow"></div>
              <div className="spinner-box medium"></div>
              <div className="spinner-box fast"></div>
            </div>
            <div className="text-[#0087FF] font-bold lg:text-[18px] text-[16px]">
              Processing your payment...
            </div>

            <style jsx>{`
              .spinner-container {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 16px;
              }

              .spinner-box {
                width: 32px;
                height: 32px;
                background-color: #3b82f6;
                border-radius: 2px;
              }

              .slow {
                animation: spinZoom 2s linear infinite;
              }

              .medium {
                animation: spinZoom 2s linear infinite;
              }

              .fast {
                animation: spinZoom 2s linear infinite;
              }

              @keyframes spinZoom {
                0% {
                  transform: rotate(0deg) scale(1);
                }
                25% {
                  transform: rotate(90deg) scale(1.4);
                }
                50% {
                  transform: rotate(180deg) scale(1);
                }
                75% {
                  transform: rotate(270deg) scale(1.4);
                }
                100% {
                  transform: rotate(360deg) scale(1);
                }
              }
            `}</style>
          </div>
        )}

        {currentStep === "success" && (
          <div className="w-full lg:h-[300px] h-[150px] flex flex-col items-center gap-4 border rounded-[8px]">
            <Image
              alt="Success"
              src="/image/success.png"
              width={200}
              height={200}
              className="lg:w-[200px] w-[100px] lg:h-[200px] h-[100px]"
            />
            <div className="text-[#039855] lg:text-[18px] text-[16px] font-bold">
              Payment successful
            </div>
          </div>
        )}

        {currentStep === "details" && (
          <div className="lg:w-full w-[290px] flex flex-col justify-between pb-2 border rounded-xl px-4">
            <div className="flex flex-col gap-2">
              <div className="w-full h-fit py-2 flex flex-col items-center gap-2 border border-x-0 border-t-0">
                <Image
                  alt=""
                  src="/image/success-2.png"
                  width={35}
                  height={35}
                  className="lg:w-[35px] w-[30px] lg:h-[35px] h-[30px]"
                />
                <div className="text-[#039855] font-normal lg:text-[14px] text-[12px]">
                  Payment successful
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-full h-fit flex items-center justify-between">
                  <div className="text-gray-800 font-bold lg:text-[14px] text-[13px]">
                    Payment:
                  </div>
                  <div className="text-gray-600 font-normal text-[11px]">
                    GEREGE TOUR CARD
                  </div>
                </div>
                <div className="w-full h-fit flex items-center justify-between">
                  <div className="text-gray-800 font-bold lg:text-[14px] text-[13px]">
                    Price:
                  </div>
                  <div className="text-gray-600 font-normal text-[11px]">
                    3,000,000.00₮
                  </div>
                </div>
                <div className="w-full h-fit flex items-center justify-between">
                  <div className="text-gray-800 font-bold lg:text-[14px] text-[13px]">
                    Payment method:
                  </div>
                  <div className="text-gray-600 font-normal text-[11px]">
                    Visa card
                  </div>
                </div>
                <div className="w-full h-fit flex items-center justify-between">
                  <div className="text-gray-800 font-bold lg:text-[14px] text-[13px]">
                    Card number:
                  </div>
                  <div className="text-gray-600 font-normal text-[11px]">
                    5422 **** **** ***1
                  </div>
                </div>
                <div className="w-full h-fit flex justify-between">
                  <div className="text-gray-800 font-bold lg:text-[14px] text-[13px]">
                    Link:
                  </div>
                  <div className="text-gray-600 font-normal flex flex-col gap-1">
                    <div className="w-fit h-fit flex items-center gap-1 bg-gray-200 p-1 rounded-[8px] border border-gray-300">
                      <div className="text-gray-600 font-normal lg:w-[250px] w-[130px] text-[11px] overflow-hidden text-ellipsis text-nowrap">
                        {link}
                      </div>
                      {isCopied ? (
                        <CheckIcon className="w-3 h-3 text-green-500" />
                      ) : (
                        <ContentCopyIcon
                          className="w-3 h-3 cursor-pointer"
                          onClick={handleCopyClick}
                        />
                      )}
                    </div>
                    <div className="text-gray-600 font-normal text-[11px] text-end">
                      You can see QR by the link
                    </div>
                  </div>
                </div>

                <div className="w-full h-fit flex justify-between ">
                  <div className="text-gray-800 font-bold lg:text-[14px] text-[13px]">
                    Email:
                  </div>
                  <div className="text-gray-600 font-normal flex flex-col gap-1">
                    <div className="lg:w-fit w-[162px] h-fit flex items-center justify-end border rounded-[8px]">
                      <Input
                        type="email"
                        placeholder="Enter your email here."
                        className="lg:text-[13px] text-[10px] w-full h-fit border-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        onClick={handleSendEmail}
                        disabled={isSending}
                        className="text-white lg:text-[14px] text-[11px] w-fit h-fit lg:py-1 py-[2px] lg:px-3 px-1 bg-[#0087FF] rounded-[6px] font-normal"
                      >
                        {isSending ? "Sending..." : "Send"}
                      </button>
                    </div>
                    <div className="text-gray-600 font-normal text-[11px] text-end">
                      To get QR by email
                    </div>
                  </div>
                </div>
                <div className="w-full h-fit flex flex-col items-center py-2 gap-2 bg-[#F9FAFB] border rounded-[8px]">
                  <div className="text-gray-800 font-bold text-[12px]">
                    Scan this QR
                  </div>
                  <Image
                    alt=""
                    src="/image/QR-payment.png"
                    width={110}
                    height={110}
                    className="lg:w-[110px] w-[90px] lg:h-[110px] h-[90px]"
                  />
                </div>
                <button
                  onClick={onClose}
                  className="text-white text-[12px] w-full h-fit py-1 px-3 bg-[#0087FF] rounded-[6px] font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentComponent;

// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import Image from "next/image";
// import CloseIcon from "@mui/icons-material/Close";

// const stripePromise = loadStripe("your-publishable-key");

// interface PaymentComponentProps {
//   isVisible: boolean;
//   onClose: () => void;
// }

// const PaymentComponent: React.FC<PaymentComponentProps> = ({
//   isVisible,
//   onClose,
// }) => {
//   const [currentStep, setCurrentStep] = useState<
//     "selection" | "loading" | "success" | "details"
//   >("selection");
//   const [paymentMethod, setPaymentMethod] = useState<"visa" | "qpay" | null>(
//     null
//   );
//   const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

//   const handlePaymentClick = async (method: "visa" | "qpay") => {
//     setPaymentMethod(method);
//     setCurrentStep("loading");

//     if (method === "qpay") {
//       // Simulate generating a QR code
//       const qrCode = "https://example.com/qr-code.png"; // Replace with actual API call to QPAY

//       setQrCodeUrl(qrCode);
//       setCurrentStep("details");
//     }
//   };

//   const handlePaymentSuccess = () => {
//     setCurrentStep("success");
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="w-screen h-full fixed inset-0 flex lg:items-center top-[5%] justify-center">
//       <div className="lg:w-[500px] w-[300px] h-fit mx-auto flex flex-col items-center gap-2 rounded-xl p-3 border bg-white relative">
//         <div className="w-full h-fit flex items-center justify-between">
//           <div className="text-[#D92D20] lg:text-[16px] text-[12px] font-semibold">
//             Don’t close until pay
//           </div>
//           <button onClick={onClose}>
//             <CloseIcon className="lg:w-[20px] w-4 lg:h-[20px] h-4" />
//           </button>
//         </div>

//         {currentStep === "selection" && (
//           <>
//             {/* Local payment */}
//             <button
//               onClick={() => handlePaymentClick("qpay")}
//               className="w-full h-fit"
//             >
//               <div className="w-full h-fit flex justify-between lg:p-3 p-2 gap-2 border rounded-[8px]">
//                 <div className="flex flex-col lg:gap-3 gap-1">
//                   <div>
//                     <div className="text-gray-800 text-[15px] lg:font-bold font-medium">
//                       Local Payment
//                     </div>
//                     <div className="text-gray-600 text-[13px] font-normal">
//                       For domestic companies
//                     </div>
//                   </div>
//                   <div className="text-[#0087FF] text-[15px] font-normal">
//                     QPAY - Minepro Qpay
//                   </div>
//                 </div>
//                 <div>
//                   <Image
//                     alt="Local payment logo"
//                     src="/image/Bank logos.png"
//                     width={40}
//                     height={40}
//                     className="lg:w-[35px] w-[30px] lg:h-[35px] h-[30px]"
//                   />
//                 </div>
//               </div>
//             </button>

//             {/* Global payment */}
//             <button
//               onClick={() => handlePaymentClick("visa")}
//               className="w-full h-fit"
//             >
//               <div className="w-full h-fit flex justify-between p-3 gap-2 border rounded-[8px] mt-3">
//                 <div className="flex flex-col lg:gap-3 gap-1">
//                   <div>
//                     <div className="text-gray-800 text-[15px] lg:font-bold font-medium">
//                       Global Payment
//                     </div>
//                     <div className="text-gray-600 text-[13px] font-normal">
//                       For international companies
//                     </div>
//                   </div>
//                   <div className="text-[#0087FF] text-[15px] font-normal">
//                     VISA - Golomt bank
//                   </div>
//                 </div>
//                 <div>
//                   <Image
//                     alt="Global payment logo"
//                     src="/image/Payment method icon.png"
//                     width={55}
//                     height={40}
//                     className="lg:w-[50px] w-[45px] lg:h-[35px] h-[30px]"
//                   />
//                 </div>
//               </div>
//             </button>
//           </>
//         )}

//         {/* {currentStep === "loading" && (
//           <div className="w-full lg:h-[200px] h-[120px] flex flex-col items-center justify-center gap-5 border rounded-[8px]">
//             <div className="spinner-container">
//               <div className="spinner-box slow"></div>
//               <div className="spinner-box medium"></div>
//               <div className="spinner-box fast"></div>
//             </div>
//             <div className="text-[#0087FF] font-bold lg:text-[18px] text-[16px]">
//               Processing your payment...
//             </div>

//             <style jsx>{`
//               .spinner-container {
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;
//                 gap: 16px;
//               }

//               .spinner-box {
//                 width: 32px;
//                 height: 32px;
//                 background-color: #3b82f6;
//                 border-radius: 2px;
//               }

//               .slow {
//                 animation: spinZoom 2s linear infinite;
//               }

//               .medium {
//                 animation: spinZoom 2s linear infinite;
//               }

//               .fast {
//                 animation: spinZoom 2s linear infinite;
//               }

//               @keyframes spinZoom {
//                 0% {
//                   transform: rotate(0deg) scale(1);
//                 }
//                 25% {
//                   transform: rotate(90deg) scale(1.4);
//                 }
//                 50% {
//                   transform: rotate(180deg) scale(1);
//                 }
//                 75% {
//                   transform: rotate(270deg) scale(1.4);
//                 }
//                 100% {
//                   transform: rotate(360deg) scale(1);
//                 }
//               }
//             `}</style>
//           </div>
//         )} */}

//         {currentStep === "details" && paymentMethod === "qpay" && qrCodeUrl && (
//           <div className="lg:w-full w-[290px] flex flex-col justify-between pb-2 border rounded-xl px-4">
//             <div className="w-full h-fit flex flex-col items-center py-2 gap-2 bg-[#F9FAFB] border rounded-[8px]">
//               <div className="text-gray-800 font-bold text-[12px]">
//                 Scan this QR
//               </div>
//               <Image
//                 alt="QR Code"
//                 src={qrCodeUrl}
//                 width={110}
//                 height={110}
//                 className="lg:w-[110px] w-[90px] lg:h-[110px] h-[90px]"
//               />
//             </div>
//           </div>
//         )}

//         {
//           // currentStep === "details" &&
//           paymentMethod === "visa" && (
//             <Elements stripe={stripePromise}>
//               <VisaPaymentForm onSuccess={handlePaymentSuccess} />
//             </Elements>
//           )
//         }

//         {currentStep === "success" && (
//           <div className="w-full lg:h-[300px] h-[150px] flex flex-col items-center gap-4 border rounded-[8px]">
//             <Image
//               alt="Success"
//               src="/image/success.png"
//               width={200}
//               height={200}
//               className="lg:w-[200px] w-[100px] lg:h-[200px] h-[100px]"
//             />
//             <div className="text-[#039855] lg:text-[18px] text-[16px] font-bold">
//               Payment successful
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// interface VisaPaymentFormProps {
//   onSuccess: () => void;
// }
// const VisaPaymentForm: React.FC<VisaPaymentFormProps> = ({ onSuccess }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState<string | null>(null);
//   const [processing, setProcessing] = useState<boolean>(false);

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     if (!stripe || !elements) return;

//     setProcessing(true);
//     setError(null);

//     const cardElement = elements.getElement(CardElement);

//     if (cardElement) {
//       // Create payment method
//       const { error: paymentMethodError, paymentMethod } =
//         await stripe.createPaymentMethod({
//           type: "card",
//           card: cardElement,
//         });

//       if (paymentMethodError) {
//         setError(paymentMethodError.message || "An error occurred");
//         setProcessing(false);
//         return;
//       }

//       // Simulate confirming the payment (typically, you'd confirm with stripe.confirmCardPayment)
//       // Replace this block with your actual payment confirmation logic, likely involving a server-side API call
//       try {
//         // Replace with actual API call or server-side payment processing
//         // const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
//         //   payment_method: paymentMethod.id,
//         // });

//         // Simulated delay for payment processing
//         setTimeout(() => {
//           onSuccess();
//           setProcessing(false);
//         }, 2000);
//       } catch (error: any) {
//         setError(
//           error.message || "An error occurred during payment processing"
//         );
//         setProcessing(false);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full h-fit flex flex-col gap-2">
//       <CardElement className="w-full h-fit p-2 border rounded-md" />
//       {error && <div className="text-red-500 text-sm">{error}</div>}
//       <button
//         type="submit"
//         className="text-white w-full h-fit py-2 px-3 bg-[#0087FF] rounded-[6px] font-semibold"
//         disabled={!stripe || processing}
//       >
//         {processing ? "Processing..." : "Pay Now"}
//       </button>
//     </form>
//   );
// };

// export default PaymentComponent;
