## Welcome
This is a fork that has been refactored to use SolidJS and Tailwind

## Description

Introducing **Astro Ecommerce**, the ultimate starter template for your e-commerce web project. Built on Astro's next-gen island architecture, Astro Ecommerce offers a sleek and modern design with a wide range of components and features to help you create a stunning online store.

**Main Features**
Build your e-commerce website quickly and efficiently with:
- 70+ fully coded elements
- 3 fully coded example pages
- 30+ blocks
- Responsive design

Astro Ecommerce has everything you need to create the e-commerce website of your dreams.


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── incentives/
│   │   ├── order/
│   │   ├── products/
│   │   ├── promo/
│   │   ├── reviews/
│   │   ├── store/
│   │   ├── dashboardContext.tsx
│   │   ├── footer.tsx
│   │   └── navbar.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── landing.astro
│       ├── product.astro
│       └── shopping-cart.astro
├── package.json
├── README.md
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |
