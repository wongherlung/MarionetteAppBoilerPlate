define(["marionette"],
    function(Marionette) {

        var App = new Marionette.Application();

        App.addRegions({
            mainRegion: "#main-region"
        });

        App.navigate = function (route, options) {
            options || (options = {});
            Backbone.history.navigate(route, options);
        };

        App.getCurrentRoute = function () {
            return Backbone.history.fragment;
        };

        App.init = function () {

            if (Backbone.history) {
                Backbone.history.start({});
            }

            require(["apps/account/account"], function () {
                App.trigger("signin:show");
            });
        };

        App.on("start", function () {
            App.init();
        });

        return App;
    }
);