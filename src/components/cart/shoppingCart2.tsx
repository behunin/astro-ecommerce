import ProductCartItem2 from './productCartItem2';
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
    <div class="w-4/5 mx-auto border shadow-lg rounded-lg">
      <h2 class="mb-4 ml-4">Shopping Cart</h2>
      <div class="grid grid-flow-row gap-3 items-center justify-evenly">
        <div>
          {products.map((product, i) =>
            <>
              {i != 0 &&
                <hr class="text-black my-4" />
              }
              <ProductCartItem2
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
        <div class="mx-auto mt-4" style={{ width: "inherit" }}>
          <div class="shadow-sm border bg-gray-100">
            <div class="lg:p-5">
              <OrderSummary
                subtotal={subtotal}
              />
            </div>
          </div>
          <button class="border rounded-lg bg-blue-500 text-white mt-4 w-full h-10">Checkout</button>
          <p class="text-center mt-4 mb-0">or <a class="text-primary mx-2" href="#">continue shopping <i class="fas fa-arrow-right mx-1"></i></a></p>
        </div>
      </div>
    </div>
  );
};
