export default function UpperNavbar() {
  return (
    <>
      <div class="w-full h-12 bg-slate-900">
        <div class="container">
          <ul class="hidden">
            <li class="nav-item dropdown p-2">
              <a href="javascript:;" class="nav-link dropdown-toggle text-white p-0" id="dropdownCurrency" data-bs-toggle="dropdown" aria-expanded="false">
                CAD
              </a>
              <ul class="dropdown-menu position-absolute px-2 py-3" aria-labelledby="dropdownCurrency" data-bs-popper="static">
                <li class="mb-2">
                  <a class="dropdown-item rounded-md" href="javascript:;">
                    <p class="mb-0">EUR</p>
                  </a>
                </li>
                <li class="mb-2">
                  <a class="dropdown-item rounded-md" href="javascript:;">
                    <p class="mb-0">USD</p>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item rounded-md" href="javascript:;">
                    <p class="mb-0">RON</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="float-right flex items-center">
            <ul class="navbar-nav hidden lg:flex flex-row">
              <li class="nav-item px-3 py-3 rounded-sm flex file:items-center">
                <a href="#" class="nav-link text-white p-0 text-sm">
                  Sign In
                </a>
              </li>
              <li class="nav-item px-3 py-3 rounded-sm flex items-center">
                <a href="#" class="nav-link text-white p-0 text-sm">
                  Create an account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
