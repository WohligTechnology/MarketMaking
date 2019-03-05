require("@babel/register")({
    presets: ["@babel/preset-env"],
    plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-async-to-generator"
    ]
})
require("wohlig-framework-core")
global.chai = require("chai")
var chaiHttp = require("chai-http")

global.chai.use(chaiHttp)
global.assert = require("chai").assert
global.expect = require("chai").expect

global.adminUrl = env.url + ":" + env.port + "/"

require("./MarketMaking/model.spec.js")
