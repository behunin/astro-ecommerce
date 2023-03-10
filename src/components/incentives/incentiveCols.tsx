
interface Props {
  order?: string;
}

export default function incentiveCols({
  order
}: Props) {

  return (
    <div class="grid grid-flow-row md:grid-flow-col mt-5 w-4/5 mx-auto">
      <div class="flex items-center gap-3">
        <i class="fas fa-shipping-fast text-3xl text-primary m-4"></i>
        <div>
          <p class="text-sm mb-1 opacity-80">We'll replace it with a new one</p>
          <h6 class="text-sm font-bold">10 Years Warranty</h6>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <i class="fas fa-user text-3xl text-primary m-4"></i>
        <div>
          <p class="text-sm mb-1 opacity-80">Send it back for free</p>
          <h6 class="text-sm font-bold">Free shipping on returns</h6>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <i class="fas fa-sync-alt text-3xl text-primary m-4"></i>
        <div>
          <p class="text-sm mb-1 opacity-80">This shipping is on us</p>
          <h6 class="text-sm font-bold">Free, contactless payment</h6>
        </div>
      </div>
    </div>
  );
};