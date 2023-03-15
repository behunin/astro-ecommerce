import { For } from 'solid-js';
import OrderCardProduct from './orderCardProduct';
import OrderSummary from '../cart/orderSummary';

interface Props {
  order: {
    orderNumber: number,
    products:
    {
      id: string,
      status: string,
      quantity: number
    }[],
    address: string,
    email: string,
    date: string,
    payment: {
      cardNumber: string;
      expiringDate: string;
    },
    phoneNumber: string,
  }
  products: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  })[];
}

export default function OrderSummaries({
  order,
  products
}: Props) {

  let orderCards: any[] = [];

  products.map(product => {
    let status = "";
    let orderQuantity = 0;

    order.products.map(productDetails => {
      if (productDetails.id == product.id) {
        status = productDetails.status;
        orderQuantity = productDetails.quantity
      }
    })
    orderCards.push(
      <OrderCardProduct
        product={product}
        status={status}
        quantity={orderQuantity}
        address={order.address}
        email={order.email}
        phoneNumber={order.phoneNumber}
      />
    )
  });

  let subtotal = 0;
  products.map(product =>
    subtotal += product.price
  )

  return (
    <div class="grid grid-flow-row bg-gray-100 dark:bg-faded rounded-md shadow-md border w-11/12 mx-auto">
      <div class="flex justify-between mb-4">
        <div class="block md:flex items-baseline">
          <h3 class="mb-0 m-3 text-3xl font-bold">Order #{order.orderNumber}</h3>
          <a class="text-sm text-primary" href="#">View invoice <i class="fas fa-long-arrow-right"></i></a>
        </div>
        <p class="mb-0 text-slate-800 mt-4 mr-4">Order Placed <b>{order.date}</b></p>
      </div>

      {orderCards}

      <div class="grid grid-flow-row md:grid-flow-col bg-gray-200 md:p-4 rounded-sm">
        <div class="mt-4 md:mt-0">
          <h5 class="text-base font-bold">Billing Address</h5>
          <For each={order.address.split(',')}>
            {(line) => <p class="text-sm opacity-80">{line}</p>}
          </For>
        </div>
        <div class="mt-4 lg:mt-0">
          <h5 class="text-base font-bold">Payment information</h5>
          <div class="flex">
            <i class="fab fa-cc-visa text-2xl text-primary m-2 mt-1"></i>
            <p class="text-sm text-gray-600">
              <b>Ending with {order.payment.cardNumber}</b> <br />
              <small>Expires {order.payment.expiringDate}</small>
            </p>
          </div>
        </div>

        <div>
          <OrderSummary
            subtotal={subtotal}
          />
        </div>
      </div>
    </div>
  );
};