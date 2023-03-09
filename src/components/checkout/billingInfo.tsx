interface Props {
  title: string;
}

export default function OrderSummary({

}: Props) {

  return (
    <>
      <div class="flex flex-row gap-3">
        <input class="form-input" type="checkbox" value="" checked />
        <label class="text-slate-500">Same as shipping information</label>
      </div>
    </>
  );
}