import StoreNavbar from './storeNavbar';
import UpperNavbar from './upperNavbar';

export default function StoreNavigation() {

  return (
    <nav class="shadow-none flex-wrap top-0 px-0 py-0">
      <UpperNavbar />
      <StoreNavbar />
      <hr class="w-max my-0 text-black" />
    </nav>
  );
};