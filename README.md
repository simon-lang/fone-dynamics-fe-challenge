# Fone Dynamics Front End Exercise

## Instructions

Install dependencies with `npm install`.

Develop with `npm run dev`, then visit [http://localhost:8080/](http://localhost:8080/).

Test with `npm test`.

Build with `npm run build`.


## Notes

Based on the suggestions in the Spec, I opted to use TypeScript, Vue.js and Webpack.

To avoid wasting time setting up the development environment, I used boilerplate from [vue-webpack-typescript](https://github.com/ducksoupdev/vue-webpack-typescript).

The bulk of the functionality can be found in [src/components/list/list.ts](src/components/list/list.ts).

Since I am relatively unfamiliar with Vue, I opted not to use VueX for State Management, instead simply maintaining state directly within the component.

The boilerplate includes vue-router, however there is only a single route.


## Known Issues

I spent a total 2-3 hours working on this. The following areas I feel are incomplete. If I were to allocate more time to working on this, these are the areas I would address.

- **Style**. The boilerplate includes Bootstrap, so all components have an unstyled, default bootstrap look to them. I included only the used bootstrap components to decrease the css bundle size. Ideally bootstrap would not be required at all.

- **Tests**. The boilerplate includes karma, and there is a single test that confirms the initial state of the data loading in. Tests to confirm the search/select functionality works in accordance with the Spec, would be a top priority. Ideally I'd also include unit tests that work independently of the DOM. i.e. directly testing the state of the component.

- **Deploy**. The `gh-pages` branch contains a static build, with the intention of being visible at [this url](https://simon-lang.github.io/fone-dynamics-fe-challenge/). However for some reason the base url in the build files is `/`, and I can't see where to change it in the boilerplate. This results in the deployed build failing to load.
