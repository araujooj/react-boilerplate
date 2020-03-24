import { get } from 'lodash';
const req = require.context('./', true, /\.js$/);

const translations = req.keys()
  .filter(file => !file.match(/(index|constants)/))
  .reduce((result, file) => {
  // here we are requiring the content of the translation
    const translationModule = req(file);
    // here we split the file name on each path /
    const [language] = file.replace('./', '').replace('.js', '').split('/');

    const langResult = get(result, language, {});

    return {
      ...result,
      [language]: {
        ...result[language],
        ...Object.entries(translationModule).reduce((trans, [key, value]) => {
          return {
            ...trans,
            [key]: {
              ...langResult[key],
              ...trans[key],
              ...value
            }
          };
        }, {})
      }
    };
  }, {});

export default translations;
