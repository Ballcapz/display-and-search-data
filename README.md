# Getting Started

## Start Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Build and Deploy

To build run:

```bash
npm run build
# or
yarn build
```

To start the build app:

```bash
npm run start
# or
yarn start
```

# Limitations and Assumptions

- I assumed that the million rows would not be static, so I used next's `getServerSideProps` rather than the `getStaticProps`, which would have allowed for easier caching of the data.
- I assumed that a debounce would be fine, since sometimes users mash keys, and this helps unnecessary requests from happening
- Right now, the initial load of the data will probably be a bit of a slow page load for a full million records, but I chose the tradeoff of fast searching/filtering over the fast initial load.
- If this was going to production, I would spend some time understanding what exactly the data is that we want to display. If there was some data that was more important on initial page load, we could load that, then load the rest of the records in in the background.
  - We could also cache parts of the data that would not be changing in an effort to help the initial load
  - Another consideration here is that if this is not the initial page, next will start pre-fetching the ensuing page inside of the `Link` on page load, in which case would considerably help load times.
- My example is only pulling 200 rows of data, so it is difficult to get a real feel for how long the loading and filtering might take
