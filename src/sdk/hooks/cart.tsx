import { checkRemainderAtom } from '@/store/auth.store';
import { cartAtom } from '@/store/cart.store';
import { IProduct } from '@/types/product.types';
import { useAtomValue } from 'jotai';

export const usePossibleQuantity = (product: IProduct) => {
  const checkRemainder = useAtomValue(checkRemainderAtom);
  const cart = useAtomValue(cartAtom);
  const quantityInCart =
    cart.find(item => item.productId === product._id)?.count || 0;
  const possibleQuantity = (product.remainder || 0) - quantityInCart;
  const disableActions = checkRemainder && !product.remainder;

  return { checkRemainder, possibleQuantity, disableActions };
};
