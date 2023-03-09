interface Props {
  subtotal: number;
}

export default function OrderSummary({
  subtotal
}: Props) {

  const tax = 7;
  const shipping = (subtotal >= 100) ? 0 : 25;
  let sum = 0;
  sum += subtotal;
  return (
    <div class="min-w-[15rem]">
      <ul class="list-none">
        <li class="border-b mt-3">
          <div class="flex justify-between">
            <p class="opacity-60">Subtotal</p>
            <p>${sum.toFixed(2)}</p>
          </div>
        </li>
        <li class="border-b mt-3">
          <div class="flex justify-between">
            <p class="opacity-60">Shipping estimate <span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to shipping" data-container="body" data-animation="true"><i class="fas fa-question-circle text-sm"></i></span></p>
            <p>${shipping.toFixed(2)}</p>
          </div>
        </li>
        <li class="border-b mt-3">
          <div class="flex justify-between">
            <p class="opacity-60">Tax estimate <span data-bs-toggle="tooltip" data-bs-placement="top" title="This may vary depending on the country you are in" data-container="body" data-animation="true"><i class="fas fa-question-circle text-sm"></i></span></p>
            <p>${tax.toFixed(2)}</p>
          </div>
        </li>
        <li class="mt-4">
          <div class="flex justify-between">
            <h5><b>Order Total</b></h5>
            <h5><b>${(subtotal + shipping + tax).toFixed(2)}</b></h5>
          </div>
        </li>
      </ul>
    </div>
  );
}