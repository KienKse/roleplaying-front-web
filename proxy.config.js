// "start": "ng serve --proxy-config proxy.config.js",

const PROXY_CONFIG = [
  {
      context: ["/api/"],
      target: "",
      secure: false,
      logLevel: "debug"
  }
]

module.exports = PROXY_CONFIG;