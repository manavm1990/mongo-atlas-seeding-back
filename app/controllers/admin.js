import config from "../config.js";

export default {
  show(pass) {
    return pass === config.password
      ? Promise.resolve("Access Granted")
      : Promise.reject(new Error("Access Denied"));
  },
};
