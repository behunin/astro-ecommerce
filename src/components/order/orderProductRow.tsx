interface Props {
  product: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  });
  status: string;
  dateModified: string;
}

export default function OrderSummary({
  product,
  status,
  dateModified

}: Props) {

  return (
    <tr class="border-b">
      <th scope="row" class="flex items-center text-sm text-gray-600 py-3">
        <img class="w-20 lg:w-10 rounded-xl shadow-sm" src={product.thumb_src} alt={product.thumb_alt} />
        <p class="text-sm text-gray-800 font-bold mb-0 mx-3">{product.title}</p>
      </th>
      <td class="text-sm text-gray-600 pt-3 px-2">${product.price.toFixed(2)}</td>
      <td class="text-sm text-gray-600 pt-3 px-2">{status} {dateModified}</td>
      <td class="text-sm text-gray-600 pt-3 px-2 text-end">
        <a href="#" class="text-blue-600">ViewProduct</a>
      </td>
    </tr>
  );
};