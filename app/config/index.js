////////////////////////////////////////////////
// THIS Read the var in the .env file
// If can't find value then get a default value
////////////////////////////////////////////////

const dotenv = require("dotenv");
dotenv.config();
// 初始化，将.env可读，不然默认不可读
process.env.NODE_ENV = process.env.NODE_ENV || "dev";
//dev 是开发环境的全称

module.exports = {
  port: process.env.PORT || 8000,
  api: {
    prefix: process.env.API_PREFIX || "/api/v1",
  }, 
  // if failed to read the env file ,then return "api/v1"
};


