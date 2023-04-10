interface Props {
  colors: string[];
}

export default function ProductBadge({
  colors,
}: Props) {
  return (
    <div>{colors.map(color => badge(color))}</div>
  );
}

function badge(color: string) {
  return <span class={"inline-block border border-solid rounded-full p-4 mx-1 text-lg whitespace-nowrap align-baseline text-center"} style={{ "background-color": color }}></span>
}

