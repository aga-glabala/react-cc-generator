const { createFile } = require('./createFile');

const createIndex = ( componentDir, componentName ) => {

  let filename = `${componentDir}/index.js`;
  createFile(filename, componentName, 'index');
};

exports.createIndex = createIndex;