interface Props {
  title: string;
}

export default function OrderSummary({

}: Props) {

  return (
    <div class="grid grid-flow-row gap-3 w-[inherit]">
      <div class="grid grid-flow-row gap-1">
        <label>Address</label>
        <input type="text" class="border rounded h-10 placeholder:pl-3" placeholder="Your Address" />
      </div>
      <div class="grid grid-flow-row md:grid-cols-3 justify-between gap-3">
        <div>
          <div class="flex flex-col gap-1">
            <label>City</label>
            <input type="text" class="border rounded h-10 placeholder:pl-3" placeholder="Miami" />
          </div>
        </div>
        <div>
          <div class="flex flex-col gap-1">
            <label>State / Province</label>
            <input type="text" class="border rounded h-10 placeholder:pl-3" placeholder="California" />
          </div>
        </div>
        <div>
          <div class="flex flex-col gap-1">
            <label>Postal Code</label>
            <input type="text" class="border rounded h-10 placeholder:pl-3" placeholder="121001" />
          </div>
        </div>
      </div>
    </div>
  );
}