interface Props {
  featuresDetails: object
}

export default function ProductAccordion({
  featuresDetails
}: Props) {

  const prodFeatures: any[] = [];

  Object.entries(featuresDetails).map(([title, value]) => {
    prodFeatures.push(
      <div class="md:w-50">
        <div class="p-3 border-t">
          <h6><b>{title}</b></h6>
          <p class="text-slate-500">{value}</p>
        </div>
      </div>
    )
  })

  return (
    <>
      {prodFeatures}
    </>
  );
}





