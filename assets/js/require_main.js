requirejs.config({
    baseUrl: "./assets/js",
    paths: {
        backbone: "vendor/backbone",
        jquery: "vendor/jquery",
        "bootstrap": "vendor/bootstrap.min",
        json2: "vendor/json2",
        underscore: "vendor/underscore",
        marionette: "vendor/backbone.marionette",
        localstorage: "vendor/backbone.localStorage-min",
        "backbone.syphon": "vendor/backbone.syphon.min",
        tpl: "vendor/tpl"
    },

    shim: {
        underscore :{
            exports: "_"
        },

        backbone: {
            deps: ["jquery", "underscore", "json2", "bootstrap"],
            exports: "Backbone"
        },

        marionette: {
            deps: ["backbone"],
            exports: "Marionette"
        },

        localstorage: ["backbone"],
        "bootstrap": ['jquery'],
        "backbone.syphon": ["backbone"]
    }
});

require(["app", "router"], function(App) {
    App.start();
});