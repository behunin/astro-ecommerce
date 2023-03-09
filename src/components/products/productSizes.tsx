interface Props {
  sizes: object
}

export default function ProductSizes({
  sizes,
}: Props) {

  const sizeID = Date.now();

  return (
    <>
      <div class="mt-4 flex justify-between items-center">
        <h6 class="mb-0"><b>Size:</b></h6>
        <a href="#" class="text-blue-600 mb-0">Size guide</a>
      </div>
      <select class="form-select w-full h-12 my-4 rounded-md">
        <option value="">Please Select a Size</option>
        {Object.entries(sizes).map(([size, amount], i) =>
          <>
            {(amount != 0) ?
              <option value={size}>{size}</option>
              :
              <option disabled value={size}>{size}</option>
            }
          </>
        )}
      </select>
    </>
  );
}
