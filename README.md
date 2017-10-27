# Webpack - The Good Parts

* [Slides](https://presentations.survivejs.com/webpack-the-good-parts/#/11)
* [Book](https://survivejs.com/webpack/)

## Pro Tips

* `npm run build -- --output-pathinfo`

## Goals

* New to webpack, wants to understand how it works -> Understand basic ideas
* Basic understanding of webpack -> Understand more
* In-depth knowledge
* How to migrate to webpack and use it in existing applications
* How to reduce bundle size and reduce build time
* Understanding configuration
* Best practices for production
* Webpack internals

```javascript
import foo from 'foo';

```

```javascript
const config = {
  resolve: {
    alias: {
      foo: path.join(__dirname, 'foo')
    },
    extensions: [ ... ], // .jsx
    modules: [
      path.join(__dirname, 'custom'),
      ... node_modules
    ],
  },
};
```
