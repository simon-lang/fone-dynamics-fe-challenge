# Fone Dynamics Front End Exercise

## Instructions

Install dependencies with `npm install`.

Develop with `npm run dev`.

Test with `npm test`.

Build with `npm run build`.


## Notes

Based on the suggestions in the Spec, I opted to use TypeScript, Vue.js and Webpack.

To avoid wasting time setting up the development environment, I used boilerplate from [vue-webpack-typescript](https://github.com/ducksoupdev/vue-webpack-typescript).

Since I am relatively unfamiliar with Vue, I opted not to use VueX for State Management, instead simply maintaining state directly within the component.

The boilerplate includes vue-router, however there is only a single route.

I did not put any effort into styling. The boilerplate includes Bootstrap, so all components have an unstyled, default bootstrap look to them. I did include only the used bootstrap components to decrease the css bundle size.
