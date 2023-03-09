import { createSignal } from 'solid-js';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '../utils/Modal';
import ProductBadge from './productBadge';
import ProductRating from './productRating';
import ProductSizes from './productSizes';


interface Props {
  thumb_src: string;
  title: string;
  price: number;
  colors: string[];
  rating: number;
  reviews: number;
  stock: boolean;
}

export default function ProductQuickview({
  thumb_src,
  title,
  price,
  colors,
  rating,
  reviews,
  stock
}: Props) {

  const [opened, setOpen] = createSignal(false);

  return (
    <div>
      <button class="border rounded-xl w-40 h-12 bg-gray-800 text-white" onClick={() => setOpen(true)}>
        Product Quickview2
      </button>
      <Modal opened={opened()} onClose={() => setOpen(false)} id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <ModalOverlay />
        <ModalContent >
          <ModalCloseButton />
          <ModalBody class="grid grid-flow-row md:grid-flow-col items-center justify-center w-full gap-3 lg:w-70 mt-5 lg:mt-0">
            <div class='grid items-center justify-center mt-4'>
              {(thumb_src) &&
                <img class="object-cover rounded shadow-sm border mb-4 w-20" src={thumb_src} />
              }
              <a class="text-blue-600 mb-4" href="#">View full details</a>
            </div>

            <div class='grid grid-flow-row items-center justify-center'>
              <ModalHeader>
                {(title.length != 0) &&
                  <h4 class="mb-3"><b>{title}</b></h4>
                }
              </ModalHeader>
              {(price) &&
                <div>
                  <div class="flex mb-3">
                    <h5 class="mb-0 p-3 border-r"><b>${price.toFixed(2)}</b></h5>
                    <div class="flex items-center px-3">
                      {(rating != 0) &&
                        <ProductRating rating={rating} reviews={reviews} />
                      }
                    </div>
                    <input class="hidden" value={price} />
                  </div>
                </div>
              }

              {(stock) ?
                <div class="flex items-center mx-2">
                  <i class="fas fa-check text-lg text-green-300"></i>
                  <p class="mb-0 mx-2 text-sm">In Stock</p>
                </div>
                :
                <div class="flex items-center text-gray-500 mx-2">
                  <i class="fas fa-minus-circle text-lg"></i>
                  <p class="mb-0 mx-2 text-sm">Out of Stock</p>
                </div>
              }

              <h6 class="mt-4 ml-3">Size:</h6>
              <div class="grid grid-flow-col gap-3 mb-2">
                <div>
                  <div class="border rounded-xl px-3">
                    <input class="hidden" type="radio" name="flexRadioDefault" id="18l" />
                    <label class="cursor-pointer px-3" for="18l">
                      <h6><b>18L</b></h6>
                      <p>Perfect for a reasonable amount of snacks.</p>
                    </label>
                  </div>
                </div>
                <div>
                  <div class="border rounded-xl px-3">
                    <input class="hidden" type="radio" name="flexRadioDefault" id="20l" />
                    <label class="cursor-pointer px-3 mx-3" for="20l">
                      <h6><b>20L</b></h6>
                      <p>Enough room for a serious amount of snacks.</p>
                    </label>
                  </div>
                </div>
              </div>

              <p class='my-4'>
                What size should I buy?
                <span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to sizes" data-container="body" data-animation="true">
                  <i class="fas fa-question-circle mx-1"></i>
                </span>
              </p>

              <div class="block text-center">
                <button class="bg-blue-600 h-12 rounded-xl text-white font-bold w-full">Add to Bag</button>
                <p class="mt-8 text-gray-500 text-xl">
                  <i class="fas fa-shield-alt m-2"></i>
                  Lifetime Guarantee
                </p>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
