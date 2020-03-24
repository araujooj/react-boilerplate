const req = require.context('./constants', true, /\.js$/);

export default req.keys()
  .reduce((result, file) => {
    const module = req(file);

    const moduleName = file.replace(/\.js$/, '').split('/').pop();

    return {
      ...result,
      [moduleName]: {
        ...result[moduleName],
        ...module
      }
    };
  }, {});

