# Bible Baptist Church - Paris Mission website

<!-- Update 10-26-26: replaced the Astro starter README with notes for this website -->

Built with [Astro](https://docs.astro.build).

## Run it

| Command           | What it does                                    |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Install dependencies (first time only)          |
| `npm run dev`     | Start the site at `http://localhost:4321`       |
| `npm run build`   | Build the finished site into `dist/`            |
| `npm run preview` | Preview the built site before publishing        |

## Pages

| Address          | File                           | Content                                   |
| :--------------- | :----------------------------- | :---------------------------------------- |
| `/`              | `src/pages/index.astro`        | Road to Salvation introduction            |
| `/contentA`–`D`  | `src/pages/contentA–D.astro`   | Salvation steps A, B, C, D                |
| `/contentPrayer` | `src/pages/contentPrayer.astro`| Salvation prayer and next steps           |
| `/home`          | `src/pages/home.astro`         | Welcome, services, plan your visit, map   |
| `/about`         | `src/pages/about.astro`        | Who we are and what we believe            |
| `/announcements` | `src/pages/announcements.astro`| Church news                               |
| `/contact`       | `src/pages/contact.astro`      | Address, times, map, Facebook             |

## Common updates

- **Address, service times, Facebook, email:** edit `src/data/church.ts`. Every page and the footer update automatically.
- **Post an announcement:** add an entry to `src/data/announcements.ts` (an example is in the file).
- **French / English text:** use `<T en="..." fr="..." />` from `src/components/T.astro`. The EN/FR button in the header switches languages. The salvation pages (A–D, Prayer) are English only for now.
- **Salvation steps:** the Previous/Next buttons and page numbers are built in `src/layouts/LessonLayout.astro`.
- **Styles:** `public/css/style.css`. Colors are defined once at the top of the "SHARED DESIGN STYLES" section.

Changes made on 10-26-26 are marked with `Update 10-26-26` comments in the code.
