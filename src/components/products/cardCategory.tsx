interface Props {
  thumb_src: string;
  title: string;
  classList: string;
}


export default function CardProduct({
  thumb_src,
  title,
  classList,
}: Props) {

  return (
    <a href="#" class="basis-60 w-4/5 md:w-unset">
      <div class={`outline-1 rounded grid grid-flow-row items-center mb-4 lg:mb-0 ${classList}`}
        style={{ "background-image": `url(${thumb_src})`, "background-size": 'cover', "background-color": "gray", "background-blend-mode": "multiply" }}>
        <div class="text-center">
          <div class="relative">
            <h4 class="text-white font-bold text-2xl">{title}</h4>
          </div>
        </div>
      </div>
    </a>
  );
};
