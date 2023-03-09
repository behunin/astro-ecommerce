import { createSignal } from "solid-js";
import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from "../utils/Modal";
import OrderProductRow from "./orderProductRow";

interface Props {
  order: {
    orderNumber: number,
    products:
    {
      id: string,
      status: string,
      dateModified: string;
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

export default function OrderHistoryCard({
  products,
  order
}: Props) {

  let orderHistoryCards: any[] = [];

  order.products.map(productDetails => {
    let productStatus = "";
    let dateModified = "";

    products.map(product => {
      if (productDetails.id == product.id) {
        productStatus = productDetails.status;
        dateModified = productDetails.dateModified;

        orderHistoryCards.push(
          <OrderProductRow
            product={product}
            status={productStatus}
            dateModified={dateModified}
          />
        )
      }
    })
  });

  const [opened, setOpen] = createSignal(false);

  return (
    <section>
      <div class="bg-gray-100 rounded-xl mt-5 mb-4">
        <div class="block md:flex justify-between items-center">
          <div class="block md:flex">
            <div class="flex md:block justify-between p-4 md:m-4">
              <h6><b>Data placed</b></h6>
              <p class="text-sm mb-0">{order.date}</p>
            </div>
            <div class="flex md:block justify-between p-4 md:m-4">
              <h6><b>Order number</b></h6>
              <p class="text-sm mb-0">{order.orderNumber}</p>
            </div>
            <div class="flex md:block justify-between p-4 md:m-4">
              <h6><b>Total amount</b></h6>
              <p class="text-sm mb-0">$299.00</p>
            </div>
          </div>
          <button class="border rounded-md md:mb-0 m-4 bg-white font-bold text-gray-600 h-10 w-36" onClick={() => setOpen(true)}>View invoice</button>
          <Modal opened={opened()} onClose={() => setOpen(false)} id="invoiceModal1" aria-labelledby="invoiceModal1" aria-hidden="true">
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <div class="p-4">
                <div class="text-center">
                  <div class="grid grid-flow-col justify-between">
                    <div class="text-start">
                      <img class="mb-2 w-[50px] rounded-md" src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png" alt="Logo" />
                      <h6>
                        <b>
                          St. Independence Embankment <br />
                          050105 Bucharest, Romania
                        </b>
                      </h6>
                      <small class="block text-muted">tel: +4 (074) 1090873</small>
                    </div>
                    <div class="text-end">
                      <button type="button" class="float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                      <h4 class="mt-7 mb-1 font-bold">Billed to:</h4>
                      <span class="block">James Thompson</span>
                      <p class="text-sm">
                        Bld Mihail Kogalniceanu,<br />
                        7652 Bucharest,<br />
                        Romania
                      </p>
                    </div>
                  </div>
                  <div class="grid grid-flow-col justify-between">
                    <div>
                      <h4 class="mt-5 text-start text-xl font-bold">
                        Invoice no. <br />
                        <small class="mr-2">#XK98321111</small>
                      </h4>
                    </div>
                    <div class='grid grid-flow-row'>
                      <div class="flex items-center justify-between">
                        <div class="text-sm m-3 font-bold">Invoice date:</div>
                        <div class="text-end">Jan 22, 2022</div>
                      </div>
                      <div class="flex items-center justify-between">
                        <div class="text-sm m-3 font-bold">Due date:</div>
                        <div class="text-end">Feb 22, 2022</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <table class="table-auto w-full">
                    <thead class="bg-default">
                      <tr>
                        <th scope="col" class="text-left text-white">Item</th>
                        <th scope="col" class="text-left text-white">Qty</th>
                        <th scope="col" class="text-left text-white">Rate</th>
                        <th scope="col" class="text-left text-white">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Premium Support</td>
                        <td>1</td>
                        <td>$ 9.00</td>
                        <td class="text-end">$ 9.00</td>
                      </tr>
                      <tr>
                        <td>Argon Dashboard PRO</td>
                        <td>3</td>
                        <td>$ 100.00</td>
                        <td class="text-end">$ 300.00</td>
                      </tr>
                      <tr>
                        <td>Parts for service</td>
                        <td>1</td>
                        <td>$ 89.00</td>
                        <td class="text-end">$ 89.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan={3} class="text-start">Total</th>
                        <th class="text-end h4">$ 398.00</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div>
                <div class="grid gap-3 text-end mr-3">
                  <h5 class="text-2xl font-bold">Thank you!</h5>
                  <p class="text-sm">If you encounter any issues related to the invoice you can contact us at:</p>
                  <h6 class="mb-0">
                    <b>email:</b>
                    <small class="text-muted"> support@cretive-tim.com</small>
                  </h6>
                </div>
              </div>
            </ModalContent>
          </Modal>
        </div>
      </div>

      <div class="hidden md:block">
        <table class="w-full">
          <thead>
            <tr>
              <th scope="col" class="text-gray-600 text-xs font-semibold opacity-70 px-2 text-start">Product</th>
              <th scope="col" class="text-gray-600 text-xs font-semibold opacity-70 px-2 text-start">Price</th>
              <th scope="col" class="text-gray-600 text-xs font-semibold opacity-70 px-2 text-start">Status</th>
              <th scope="col" class="text-gray-600 text-xs font-semibold opacity-70 px-2 text-end">Info</th>
            </tr>
          </thead>
          <tbody>
            {orderHistoryCards}
          </tbody>
        </table>
      </div>
    </section>
  );
}


