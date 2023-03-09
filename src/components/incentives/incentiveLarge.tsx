
interface Props {
  order?: string;
}

export default function incentiveLarge({
  order
}: Props) {

  return (
    <div>
      <h2 class='text-5xl font-bold'>We build our business on customer service</h2>
      <p> It’s like a little kid, a little boy, looking at colors, and no one told him what colors are good, before somebody tells you you shouldn’t like pink because that’s for girls, or you’d instantly become a gay two-year-old. Why would anyone pick blue over pink? Pink is obviously a better color.</p>
      <div class="grid grid-flow-row md:grid-flow-col gap-3 text-gray-600 mt-5">
        <div>
          <i class="fas fa-shipping-fast text-5xl mb-4"></i>
          <h6 class="text-sm font-bold">Free Shipping</h6>
          <p class="text-sm opacity-80">There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill.</p>
        </div>
        <div class="my-3 md:my-0">
          <i class="fas fa-user text-5xl mb-4"></i>
          <h6 class="text-sm font-bold">10 Years Warranty</h6>
          <p class="text-sm opacity-80">I’m not really specifically talented at anything except for the ability to learn.</p>
        </div>
        <div>
          <i class="fas fa-sync-alt text-5xl mb-4"></i>
          <h6 class="text-sm font-bold">Exchange</h6>
          <p class="text-sm opacity-80">Then we lose family over time. What else could rust the heart more over time? Blackgold.</p>
        </div>
      </div>
    </div>
  );
};