import { Accordion, AccordionHeader } from "../utils/Accordian/Accordian";

interface Props {
  title: string;
}

export default function ProductOverview({
  title,
}: Props) {

  return (
    <div class="w-4/5 mx-auto border rounded-lg shadow-lg p-1">
      <div class="border-b pb-8">
        {(title.length != 0) &&
          <h2 class="float-left mb-3">{title}</h2>
        }
        <div class="float-right mx-auto items-center">
          <div class="dropdown">
            <button class="mb-0" type="button" id="sortButton" data-bs-toggle="dropdown" aria-expanded="false">
              Sort &nbsp;
            </button>
            <select class="dropdown-menu" aria-labelledby="sortButton">
              <option value="most">Most Popular</option>
              <option value="best">Best Rating</option>
              <option value="new">Newest</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div class="grid grid-flow-row md:grid-cols-4 mt-5">
        <div class="col-span-1">
          <ul class="list-none mx-3">
            <li class="mb-2"><a href="#">Totes</a></li>
            <li class="mb-2"><a href="#">Backpacks</a></li>
            <li class="mb-2"><a href="#">Travel Bags</a></li>
            <li class="mb-2"><a href="#">Hip Bags</a></li>
            <li class="mb-2"><a href="#">Laptop Sleeves</a></li>
          </ul>
          <hr />
          <div class="relative" id="accordionArrivals">
            <Accordion>
              <AccordionHeader>
                <h5 class="accordion-header" id="headingThree">
                  <b>Color</b>
                </h5>
              </AccordionHeader>

              <div id="collapseThree" class="relative" aria-labelledby="headingThree" data-bs-parent="#accordionArrivals">
                <div class="flex flex-col text-sm opacity-80">
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customCheck1" />
                    <label class="mb-0">White</label>
                  </div>
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customCheck2" />
                    <label class="mb-0">Beige</label>
                  </div>
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customCheck3" checked />
                    <label class="mb-0">Blue</label>
                  </div>
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customCheck4" />
                    <label class="mb-0">Brown</label>
                  </div>
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customCheck5" />
                    <label class="mb-0">Green</label>
                  </div>
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customCheck6" />
                    <label class="mb-0">Purple</label>
                  </div>
                </div>
              </div>
            </Accordion>
            <hr />
            <Accordion>
              <AccordionHeader>
                <h5 class="accordion-header" id="headingFour">
                  <b>Category</b>
                </h5>
              </AccordionHeader>
              <div id="collapseFour" class="relative" aria-labelledby="headingFour" data-bs-parent="#accordionArrivals">
                <div class="flex flex-col text-sm opacity-80">
                  <div class="justify-start ">
                    <input class="m-2" type="checkbox" value="" id="customCheck7" />
                    <label class="mb-0">New Arrivals</label>
                  </div>
                  <div class="justify-start ">
                    <input class="m-2" type="checkbox" value="" id="customCheck8" />
                    <label class="mb-0">Sale</label>
                  </div>
                  <div class="justify-start ">
                    <input class="m-2" type="checkbox" value="" id="customCheck9" checked />
                    <label class="mb-0">Travel</label>
                  </div>
                  <div class="justify-start ">
                    <input class="m-2" type="checkbox" value="" id="customCheck10" />
                    <label class="mb-0">Organization</label>
                  </div>
                  <div class="justify-start ">
                    <input class="m-2" type="checkbox" value="" id="customCheck11" />
                    <label class="mb-0">Accessories</label>
                  </div>
                </div>
              </div>
            </Accordion>
            <hr />
            <Accordion>
              <AccordionHeader>
                <h5 class="accordion-header" id="headingFifth">
                  <b>Size</b>
                </h5>
              </AccordionHeader>
              <div id="collapseFifth" class="relative" aria-labelledby="headingFifth">
                <div class="flex flex-col text-sm opacity-80">
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customSize1" />
                    <label class="mb-0">XXS</label>
                  </div>
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customSize2" />
                    <label class="mb-0">XS</label>
                  </div>
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customSize3" />
                    <label class="mb-0">S</label>
                  </div>
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customSize4" />
                    <label class="mb-0">M</label>
                  </div>
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customSize5" />
                    <label class="mb-0">L</label>
                  </div>
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customSize6" />
                    <label class="mb-0">XL</label>
                  </div>
                  <div class="justify-start">
                    <input class="m-2" type="checkbox" value="" id="customSize7" />
                    <label class="mb-0">XXL</label>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
        <div class="col-span-3">
          <div class="flex border-4 rounded-xl border-dashed h-full"></div>
        </div>
      </div>
    </div>
  );
};
