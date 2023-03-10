import { For } from 'solid-js';
import './orderCardProduct.css'

interface Props {
  product: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  });
  quantity: number;
  status: string;
  address: string;
  email: string;
  phoneNumber: string;
}

export default function OrderCardProduct({
  product,
  status,
  address,
  email,
  quantity,
  phoneNumber
}: Props) {

  let widthClass = "";

  switch (status) {
    case "Order Placed":
      widthClass = " w-1/4"
      break;
    case "Processed":
      widthClass = " w-2/4"
      break;
    case "Shipped":
      widthClass = " w-3/4"
      break;
    case "Delivered":
      widthClass = " w-full"
      break;
  }

  return (
    <div class="shadow-md border rounded-xl p-3 mb-4">
      <div class="grid grid-flow-row md:grid-flow-col gap-6 border-b pb-4">
        <div class='flex items-center justify-center'>
          <img class="w-1/2 rounded-lg shadow-md mb-3 md:mb-0" src={product.thumb_src} alt={product.thumb_alt} />
        </div>
        <div class='flex flex-col gap-3'>
          <h5 class="text-base font-bold">{product.title}</h5>
          <h6 class="text-sm font-bold">${product.price.toFixed(2)}</h6>
          <p class="text-sm mb-0 opacity-80 whitespace-pre-wrap">{product.description}</p>
          <p class="text-slate-800 text-sm mt-2"><b>Qty:</b> {quantity}</p>
        </div>
        <div class="md:mt-4 lg:mt-0">
          <h5 class="text-base">Delivery Address</h5>
          <For each={address.split(',')}>
            {(line) => <p class="text-sm opacity-80">{line}</p>}
          </For>
        </div>
        <div class="flex flex-col gap-1">
          <h5 class="text-base">Shipping updates</h5>
          <p class="text-sm opacity-80">{email}</p>
          <p class="text-sm opacity-80">{phoneNumber}</p>
          <a class="text-sm text-primary font-bold" href="#">Edit</a>
        </div>
      </div>
      <div class="hidden md:block mt-4">
        <h6 class='font-bold mb-3'>Preparing to ship on March 24, 2021</h6>
        <div class="progress">
          <span class={widthClass}></span>
        </div>
        <div class="block md:flex justify-between">
          <p class="font-semibold text-primary">Order placed</p>
          {status == "Order Placed" &&
            <>
              <p class="font-semibold">Processed</p>
              <p class="font-semibold">Shipped</p>
              <p class="font-semibold">Delivered</p>
            </>
          }
          {status == "Processed" &&
            <>
              <p class="font-semibold text-primary">Processed</p>
              <p class="font-semibold">Shipped</p>
              <p class="font-semibold">Delivered</p>
            </>
          }
          {status == "Shipped" &&
            <>
              <p class="font-semibold text-primary">Processed</p>
              <p class="font-semibold text-primary">Shipped</p>
              <p class="font-semibold">Delivered</p>
            </>
          }
          {status == "Delivered" &&
            <>
              <p class="font-semibold text-primary">Processed</p>
              <p class="font-semibold text-primary">Shipped</p>
              <p class="font-semibold text-primary">Delivered</p>
            </>
          }
        </div>
      </div>
    </div>
  );
}