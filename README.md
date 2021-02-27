# Bad API Assignment

This is my solution to the for the assignment.

![Solution Home Page](https://i.paste.pics/deab51b72efacb93a4a89aad1781db7b.png)

## Folder Structure
```
|-- App.css
|-- App.jsx
|-- components
|   |-- error-fallback
|   |   |-- ErrorFallback.jsx
|   |   `-- ErrorFallback.styles.js
|   |-- nav
|   |   |-- Nav.jsx
|   |   `-- Nav.styles.js
|   `-- products-default
|       |-- ProductsDefault.jsx
|       `-- ProductsDefault.styles.js
|-- index.css
|-- index.js
|-- redux
|   |-- actions
|   |   `-- product.js
|   |-- reducers
|   |   `-- product.js
|   `-- store.js
|-- setupTests.js
`-- tests
    |-- fixtures
    |   `-- product.js
    |-- redux
    |   `-- actions
    |       `-- product.test.js
    `-- store.js
```

## Running Locally
App is bootstrapped with create-react-app.

`npm run start` to run the app locally and
`npm run test` to run tests.

## Problems and Solutions

✅ **Having to do two different API calls to get products and their availability:** I wrote two async functions, one for fetching products and other for fetching availability data on array of brands. Second one had to loop through the array and fetch data for each brand.

✅ **Legacy API errors:** I handled errors in each async function to save the errors in state and created an ErrorFallback component to show them if theres any error.

✅ **First loading time:** Availability data takes long to fetch since there are many brands. So while the data is being fetched, there will be a loading state shown.

✅ **Getting different products:** App will get the _gloves_ on first load. After loading finishes user can see product and stock data for related product. And in the navbar, there are routes for links for each desired product which would show stock data for related product faster than the first load.

✅ **Matching product data with stock data:** After fetching both products and availability, I map both of those arrays and check if their _id_'s match. Depending on that I add the _DATAPAYLOAD_ for each product in their card.

✅ **Load More button:** Considering the amount of products, I added a load more button to make the UX better, to show the amount of products on demand.

## Tests

I added a few tests to mock _axios_ and _redux store_ and check if actions and action types work properly. Overall, 2 Unit tests and 2 Functional tests.
