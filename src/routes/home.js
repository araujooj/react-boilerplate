import React from 'react';
import { HOME_ROUTE } from "../constants/translations.routes";
import { HOME } from "../constants/translations.translations";
import i18n from '../i18n';

export default [
  {
    path: "/abc",
    title: "asdjnasjdnj",
    exact: true,
    component: React.lazy(() => import(/* webpackChunkName: "home" */'../components/Pages/Home')),
    auth: false
  }
];
