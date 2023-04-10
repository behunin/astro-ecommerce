import ProductCartItem from './productCartItem';
import OrderSummary from './orderSummary';

interface Props {
  products: ({
    thumb_src: string;
    thumb_alt: string;
    color: string;
    title: string;
    price: number;
    size: string;
    stock: boolean
    subtotal: number;
    shipping: number;
    tax: number;
  })[];
}

export default function ShoppingCart({
  products
}: Props) {

  let subtotal = 0;
  products.map(product =>
    subtotal += product.price
  )

  return (
    <div class="container grid grid-flow-row items-center justify-evenly mt-5 border rounded-lg shdow-lg mx-auto">
      <h2 class="mb-5"><b>Shopping Cart</b></h2>
      <div class="grid grid-flow-row md:grid-flow-col gap-3 items-center justify-evenly">
        <div>
          {products.map((product, i) =>
            <>
              {i != 0 &&
                <hr class="text-black my-4" />
              }
              <ProductCartItem
                thumb_src={product.thumb_src}
                thumb_alt={product.thumb_alt}
                title={product.title}
                color={product.color}
                size={product.size}
                price={product.price}
                stock={product.stock}
              />
            </>
          )}

        </div>
        <div class="mt-5 lg:mt-0 relative md:sticky mx-auto md:top-1/4 md:right-8">
          <div class="grid shadow-md border rounded-lg bg-gray-100">
            <div class="lg:p-5">
              <h5 class="mb-4"><b>Order Summary</b></h5>
              <OrderSummary
                subtotal={subtotal}
              />
            </div>
            <button class="border rounded-md w-4/5 h-10 mb-4 bg-blue-600 text-white mx-auto">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
