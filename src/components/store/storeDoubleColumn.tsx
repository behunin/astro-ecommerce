export default function StoreNavigationDoubleColumn() {
  return (
    <section>
      <div class="grid grid-flow-row md:grid-flow-col gap-8 mt-5">
        <div class="mb-4 lg:mb-0">
          <h6 class="w-full pb-3 border-b-slate-800">Clothing</h6>
          <hr />
          <div class="flex flex-row items-start gap-12 pt-2">
            <ul class="flex flex-col mx-3">
              <li class="my-1">
                <a class="text-slate-500 text-lg" href="#" target="_blank">
                  Tops
                </a>
              </li>
              <li class="my-1">
                <a class="text-slate-500 text-lg" href="#" target="_blank">
                  Dresses
                </a>
              </li>
              <li class="my-1">
                <a class="text-slate-500 text-lg" href="#" target="_blank">
                  Pants
                </a>
              </li>
              <li class="my-1">
                <a class="text-slate-500 text-lg" href="#" target="_blank">
                  Denim
                </a>
              </li>
              <li class="my-1">
                <a class="text-slate-500 text-lg" href="#" target="_blank">
                  Sweaters
                </a>
              </li>
              <li class="my-1">
                <a class="text-slate-500 text-lg" href="#" target="_blank">
                  T-Shirts
                </a>
              </li>
            </ul>
            <ul class="flex flex-col mx-6 md:mx-11 lg:mx-10">
              <li class="my-1">
                <a class="text-slate-500 text-lg" href="#" target="_blank">
                  Jackets
                </a>
              </li>
              <li class="my-1">
                <a class="text-slate-500 text-lg" href="#" target="_blank">
                  Activewear
                </a>
              </li>
              <li class="my-1">
                <a class="text-slate-500 text-lg" href="#" target="_blank">
                  Shorts
                </a>
              </li>
              <li class="my-1">
                <a class="text-slate-500 text-lg" href="#" target="_blank">
                  Swimwear
                </a>
              </li>
              <li class="my-1">
                <a class="text-slate-500 text-lg" href="#" target="_blank">
                  Browse All
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h6 class="w-full pb-3 border-b-slate-800">Accessories</h6>
          <hr />
          <ul class="flex flex-col mx-3 pt-2">
            <li class="my-1">
              <a class="text-slate-500 text-lg" href="#" target="_blank">
                Shoes
              </a>
            </li>
            <li class="my-1">
              <a class="text-slate-500 text-lg" href="#" target="_blank">
                Jewelry
              </a>
            </li>
            <li class="my-1">
              <a class="text-slate-500 text-lg" href="#" target="_blank">
                Handbags
              </a>
            </li>
            <li class="my-1">
              <a class="text-slate-500 text-lg" href="#" target="_blank">
                Socks
              </a>
            </li>
            <li class="my-1">
              <a class="text-slate-500 text-lg" href="#" target="_blank">
                Hats
              </a>
            </li>
            <li class="my-1">
              <a class="text-slate-500 text-lg" href="#" target="_blank">
                Browse All
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 class="w-full pb-3 border-b-slate-800 ">Categories</h6>
          <hr />
          <ul class="flex flex-col mx-3 pt-2">
            <li class="my-1">
              <a class="text-slate-500 text-lg" href="#" target="_blank">
                New Arrivals
              </a>
            </li>
            <li class="my-1">
              <a class="text-slate-500 text-lg" href="#" target="_blank">
                Sale
              </a>
            </li>
            <li class="my-1">
              <a class="text-slate-500 text-lg" href="#" target="_blank">
                Basic Tee
              </a>
            </li>
            <li class="my-1">
              <a class="text-slate-500 text-lg" href="#" target="_blank">
                Artwork Tees
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
