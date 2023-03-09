export default function StoreNavbar() {
  return (
    <div class="container py-2">
      <nav aria-label="breadcrumb">
        <div class="flex items-center md:m-12">
          <i class="fas fa-wind text-lg text-primary"></i>
        </div>
      </nav>
      <ul class="none lg:flex md:p-8">
        <li class="px-3 py-3 border flex items-center">
          <a href="#" class="p-0">
            Women
          </a>
        </li>
        <li class="px-3 py-3 rounded-sm flex items-center">
          <a href="#" class="p-0">
            Men
          </a>
        </li>
        <li class="px-3 py-3 rounded-sm flex items-center">
          <a href="#" class="p-0">
            Company
          </a>
        </li>
        <li class="px-3 py-3 rounded-sm d-flex items-center">
          <a href="#" class="p-0">
            Stores
          </a>
        </li>
      </ul>
      <div class="collapse mt-2 md:m-0 sm:m-4" id="navbar">
        <ul class="md:m-auto  justify-end">
          <li class="p-3 flex items-center xl:none">
            <a href="javascript:;" class="p-0" id="iconNavbarSidenav">
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line bg-white"></i>
                <i class="sidenav-toggler-line bg-white"></i>
                <i class="sidenav-toggler-line bg-white"></i>
              </div>
            </a>
          </li>
          <li class="px-3 flex items-center">
            <a href="javascript:;" class="p-0">
              <h6 class="mb-0 text-sm">Search</h6>
            </a>
          </li>
          <li class="px-3 flex items-center">
            <a href="javascript:;" class="p-0">
              <h6 class="mb-0 text-sm">Help</h6>
            </a>
          </li>
          <li class="px-3 flex items-center">
            <a href="javascript:;" class="p-0">
              <i class="fas fa-cart-plus"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
