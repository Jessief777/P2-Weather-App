const expressLoader = require("./express");
// const mongooseLoader = require ('./mongoose)

// initialization (初始化)
exports.init = () => {
  expressLoader();
  // mongooseLoader();
};
// for root index.js init() function, can write like normal exports as well
