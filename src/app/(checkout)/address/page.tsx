import CheckoutLayout from '../checkout-layout';
import AddressForm from '@/components/address-form/address-form';

const Checkout = () => {
  return (
    <CheckoutLayout title="Payment Form">
      <AddressForm />
    </CheckoutLayout>
  );
};

export default Checkout;
