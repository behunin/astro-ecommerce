import PaymentDetails from './paymentDetails';
import ShippingInfo from './shippingInfo';
import BillingInfo from './billingInfo';
import OrderSummary from '../cart/orderSummary';
import CheckoutSingleItemDark from '../checkout/checkoutSingleItemDark';
import ReviewRating from '../reviews/reviewRating';
import { Accordion, AccordionGroup, AccordionHeader } from '../utils/Accordian/Accordian';

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
}

export default function CheckoutSummary({
  products,
}: Props) {

  let subtotalCheckout = 0;
  products.map(product =>
    subtotalCheckout += product.price
  )

  return (
    <section>
      <div class="grid grid-flow-row md:grid-cols-4 gap-3 w-11/12 mx-auto">
        <div class="grid grid-flow-row gap-4 col-span-2 p-1">
          <small class="text-white opacity-60">Amount due</small>
          <h3 class="text-white">${subtotalCheckout.toFixed(2)}</h3>
          {products.map((product, i) =>
            <CheckoutSingleItemDark
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
        <div class="grid grid-flow-row p-3 md:p-5 col-span-2">
          <button class="border rounded-xl w-full h-12 text-white bg-slate-800">
            <i class="fab fa-apple m-2"></i>
            Pay
          </button>
          <div class="my-4 relative text-center">
            <span class='absolute -top-[0.80rem] left-1/2  bg-white'>or</span>
            <hr />
          </div>
          <h5 class="mb-4 font-bold text-2xl">Contact information</h5>
          <div class="flex flex-col gap-1">
            <label>Email address</label>
            <input type="email" class="border rounded h-10 placeholder:pl-3" placeholder="name@example.com" />
          </div>
          <div class="flex flex-col gap-1">
            <label>Phone number</label>
            <input type="text" class="border rounded h-10 placeholder:pl-3" placeholder="Your Phone number" />
          </div>
          <div class="flex flex-row gap-1">
            <input class="w-6" type="checkbox" value="" checked />
            <label class="custom-control-label">I have read the terms and conditions and agree to the sale of my personal information to the highest bidder.</label>
          </div>
          <button class="border rounded-xl bg-faded w-full h-12 mt-4" disabled>Continue</button>

          <AccordionGroup allowMultiple={true} allowToggle={true}>
            <Accordion>
              <AccordionHeader>
                <h5 class='text-xl my-3' id="headingOne">
                  Payment Details
                </h5>
              </AccordionHeader>
              <div class="mb-3">
                <div id="collapseOne" aria-labelledby="headingOne">
                  <div class="text-sm opacity-80">
                    <PaymentDetails />
                  </div>
                </div>
              </div>
            </Accordion>
            <Accordion>
              <AccordionHeader>
                <h5 class='text-xl my-3' id="headingTwo">
                  Shipping Info
                </h5>
              </AccordionHeader>
              <div id="collapseTwo" aria-labelledby="headingTwo">
                <div class="text-sm opacity-80">
                  <ShippingInfo title='TODO' />
                </div>
              </div>
            </Accordion>
            <Accordion>
              <AccordionHeader>
                <h5 class='text-xl my-3' id="headingThree">
                  Billing address
                </h5>
              </AccordionHeader>
              <div id="collapseThree" aria-labelledby="headingThree">
                <div class="text-sm opacity-80">
                  <BillingInfo title='TODO' />
                </div>
              </div>
            </Accordion>
            <Accordion>
              <AccordionHeader>
                <h5 class='text-xl my-3' id="headingFour">
                  Review
                </h5>
              </AccordionHeader>
              <div id="collapseFour" aria-labelledby="headingFour">
                <div class="text-sm opacity-80">
                  <ReviewRating rating={3} />
                </div>
              </div>
            </Accordion>
          </AccordionGroup>
        </div>
      </div>
    </section>
  );
};

