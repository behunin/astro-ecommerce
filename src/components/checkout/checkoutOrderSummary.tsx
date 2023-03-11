import PaymentDetails from './paymentDetails';
import ShippingInfo from './shippingInfo';
import BillingInfo from './billingInfo';
import OrderSummary from '../cart/orderSummary';
import CheckoutSingleItem from '../checkout/checkoutSingleItem';

interface Props {
  products: ({
    thumb_src: string;
    thumb_alt: string;
    color: string;
    title: string;
    price: number;
    size: string;
    stock: string;
    subtotal: number;
    shipping: number;
    tax: number;
  })[];
  textColor?: string
}

export default function CheckoutSummary({
  products,
  textColor
}: Props) {

  let subtotalCheckout = 0;
  products.map(product =>
    subtotalCheckout += product.price
  )

  return (
    <div class="grid grid-flow-row md:grid-flow-col gap-3 w-11/12 mx-auto">
      <div class="col-span-1 md:col-span-2">
        <h5 class="mb-4 font-bold">Contact information</h5>
        <div class="flex flex-col gap-1 font-medium">
          <label>Email address</label>
          <input type="email" class="border rounded h-10 placeholder:pl-3" placeholder="name@example.com" />
        </div>
        <h5 class="mt-5 mb-4 font-bold">Payment details</h5>
        <PaymentDetails />

        <h5 class="mt-5 mb-4 font-bold">Shipping address</h5>
        <ShippingInfo title='TODO' />

        <h5 class="mt-5 mb-4 font-bold">Billing information</h5>
        <BillingInfo title='TODO' />

        <hr />
        <button class="border rounded-xl h-10 w-32 bg-blue-600 float-right items-end mt-2 mb-0 text-white font-bold">Pay now</button>
      </div>
      <div class="md:p-5 bg-slate-600 rounded-md md:col-span-2 p-1">
        <small class="text-white opacity-60">Amount due</small>
        <h3 class="text-white mb-4 text-4xl font-bold">${subtotalCheckout.toFixed(2)}</h3>
        {products.map((product, i) =>
          <CheckoutSingleItem
            thumb_src={product.thumb_src}
            thumb_alt={product.thumb_alt}
            title={product.title}
            color={product.color}
            size={product.size}
            price={product.price}
          />
        )}
        <OrderSummary subtotal={subtotalCheckout} />
      </div>
    </div>
  );
};

