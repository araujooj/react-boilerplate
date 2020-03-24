const req = require.context('./', true, /^\.\/.*\.js$/);

const appRoutes = req.keys().reduce((routes, file) => {
  if (file !== './index.js' && file !== __filename) {
    const route = req(file).default;

    if (Array.isArray(route)) {
      return [...routes, ...route];
    }

    routes.push(route);
  }
  return routes;
}, []);
export default appRoutes;
