export default function OrderSummary() {
  return (
    <div class="grid grid-flow-row gap-3">
      <div class="flex flex-col gap-1 font-medium">
        <label>Card Number</label>
        <input type="text" class="border rounded h-10 placeholder:pl-3" placeholder="EUR89BTRL1234XXXXX" />
      </div>
      <div class="grid grid-flow-row md:grid-flow-col gap-3">
        <div>
          <div class="flex flex-col gap-1">
            <label>Expiration date (MM/YY)</label>
            <input type="text" class="border rounded h-10 placeholder:pl-3" placeholder="11/27" />
          </div>
        </div>
        <div>
          <div class="flex flex-col gap-1">
            <label>CVC</label>
            <input type="text" class="border rounded h-10 placeholder:pl-3" placeholder="112" />
          </div>
        </div>
      </div>
    </div>
  );
}