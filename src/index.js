import React from 'react';
import render from './App';
import { DEVELOPMENT } from "./constants/environment";
import { store } from "./store";
import { history } from "./base";

if (process.env.NODE_ENV === DEVELOPMENT) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

render({ store, history });
