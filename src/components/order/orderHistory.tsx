import OrderHistoryCard from './orderHistoryCard';

interface Props {
  orders: {
    orderNumber: number,
    products:
    {
      id: string,
      status: string,
      quantity: number,
      dateModified: string
    }[],
    address: string,
    email: string,
    date: string,
    payment: {
      cardNumber: string;
      expiringDate: string;
    },
    phoneNumber: string,
  }[];
  products: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  })[];
}

export default function OrderHistory({
  orders,
  products
}: Props) {

  let orderHistoryCards: any[] = [];

  orders.forEach(order => {
    let orderProducts: any[] = [];

    products.forEach(product => {
      orderProducts.push(product);
    });
    orderHistoryCards.push(<OrderHistoryCard order={order} products={orderProducts} />)
  });
  return (
    <div>
      <h3 class="mb-0 font-bold">Order history</h3>
      <p>Check the status of recent orders, manage returns and download invoices.</p>

      {orderHistoryCards}
    </div>
  );
};