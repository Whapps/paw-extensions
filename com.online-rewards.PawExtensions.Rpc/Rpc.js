(function() {
    var CryptoJS = require("./vendor/crypto-js/crypto-js.js");
    var Rpc;

    Rpc = function() {
        this.evaluate = function(context) {
            var request     = context.getCurrentRequest(),
                url         = context.getCurrentRequest().getUrl(),
                queryString = url.substring(url.indexOf("?") + 1),
                body        = request.method === "GET" ? queryString : request.body;
            return CryptoJS.HmacSHA256(body, this.secret);
        };

        this.title = function() {
            return "Online-Rewards Rpc Signature";
        };
    };

    Rpc.identifier = "com.online-rewards.PawExtensions.Rpc";
    Rpc.title      = "Online-Rewards Rpc Signature";
    Rpc.inputs     = [ DynamicValueInput("secret", "Secret", "String") ];

    registerDynamicValueClass(Rpc);
}).call(this);
