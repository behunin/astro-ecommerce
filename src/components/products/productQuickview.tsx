import { createEffect, createSignal } from 'solid-js';
import { ModalCloseButton, ModalContent, ModalOverlay, Modal, ModalHeader, ModalBody, ModalFooter } from '../utils/Modal';
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
  sizes: object
}

export default function ProductQuickview({
  thumb_src,
  title,
  price,
  colors,
  rating,
  reviews,
  sizes
}: Props) {

  const [opened, setOpen] = createSignal(false);

  createEffect(() => console.log("MODAL:", opened()));

  return (
    <div>
      <button class="border rounded-xl w-40 h-12 bg-gray-800 text-white" onClick={() => setOpen(true)}>
        Product Quickview
      </button>
      <Modal opened={opened()} onClose={() => setOpen(false)} id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <div class="flex-auto gap-3 p-4">
            {(thumb_src) &&
              <img class="object-contain rounded-2xl shadow-sm border mb-4 md:mb-0" src={thumb_src} />
            }
            <div>
              <ModalHeader>
                {(title.length != 0) &&
                  <h4 class="mb-0"><b>{title}</b></h4>
                }
              </ModalHeader>
              <ModalBody class="w-full md:mt-5 lg:mt-0">
                {(price) &&
                  <div class="flex mb-3">
                    <h6><b>${price.toFixed(2)}</b></h6>
                    <input class="opacity-0" value={price} />
                  </div>
                }
                {(rating != 0) &&
                  <ProductRating rating={rating} reviews={reviews} />
                }
                {(colors.length != 0) &&
                  <div>
                    <h6 class="mt-4">Color:</h6>
                    {(colors) &&
                      <ProductBadge colors={colors} />
                    }
                  </div>
                }
                {(sizes) &&
                  <ProductSizes sizes={sizes} />
                }
              </ModalBody>
              <ModalFooter class="flex flex-col gap-3 text-center mt-4">
                <button class="border rounded-lg w-full h-12 bg-blue-600 text-white font-bold">Add to Bag</button>
                <a class="text-primary" href="#">View full details</a>
              </ModalFooter>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};
