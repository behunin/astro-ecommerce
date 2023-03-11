import './productSizes.scss'

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
        <a href="#" class="text-primary mb-0">Size guide</a>
      </div>
      <fieldset class="switch-group w-full h-12 my-4 rounded-md">
        <legend>Size</legend>
        {Object.entries(sizes).map(([size, amount], i) =>
          <>
            {(amount != 0) ?

              <div class="group-switch">
                <label for="text-left">{size}</label>
                <p>{size}</p>
                <input type="radio" name="text-alignment" id={`text-left-${i}`} value={size} />
              </div>
              :
              <div class="group-switch">
                <input disabled type="radio" name="text-alignment" id={`text-left-${i}`} value={size} />
                <label for="text-left">{size}</label>
                <p class='select-none text-faded'>{size}</p>
              </div>
            }
          </>
        )}
      </fieldset>
    </>
  );
}
