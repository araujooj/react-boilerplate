import { uniqBy } from 'lodash';
import pathToRegexp from 'path-to-regexp';
import i18n from '../i18n';
import { HOME } from '../i18n/translations/constants/general/translations';
import appRoutes from '../routes';

export const splitRoutes = (routes, condition) => [
  routes.filter(condition),
  routes.filter((...args) => !condition(...args))
];

export const [authRoutes, guestRoutes] = splitRoutes(appRoutes, route => route.auth);

export const menuRoutes = appRoutes.filter(route => route.menuConfig && !route.menuGroup);


export const breadcrumbRoutes = appRoutes.map(route => ({
  path: route.path,
  breadcrumbs:
    [i18n.t(HOME)]
      .concat(route.breadcrumbs && route.breadcrumbs.length ? route.breadcrumbs : [])
      .concat([route.title])
      .map(breadcrumbTitle => {
        return appRoutes.find(route => route.title === breadcrumbTitle);
      })
      .filter(Boolean)
})).reduce((routesObject, route) => ({
  ...routesObject,
  [route.path]: uniqBy(route.breadcrumbs, 'title')
}), {});

export const getParams = (path, comparePath) => {
  try {
    const keys = [];
    const result = pathToRegexp(path, keys).exec(comparePath);

    if (!keys.length) return {};

    return keys.reduce((payload, key, index) => ({ ...payload, [key.name]: result[index + 1] }), {});
  } catch (e) {
    return {};
  }
};
