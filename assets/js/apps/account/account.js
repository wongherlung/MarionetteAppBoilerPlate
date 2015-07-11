define(["app",
    "tpl!apps/account/tpl/signin-view.tpl"],
    function(App, signinViewTpl) {
    App.module("Account", function(Account, App, Backbone, Marionette, $, _) {
        
        // Views
        Account.SigninViewTpl = Marionette.CompositeView.extend({
            tagName: "div",
            template: signinViewTpl,
            className: "signinpanel",

            onRender: function() {
                
            }
        });

        // Controller
        Account.Controller = {
            showSignIn: function() {
                var signInView = new Account.SigninViewTpl();
                App.mainRegion.show(signInView);
            }  // showSignIn
        };

        // Listeners

        App.on("signin:show", function() {
            Account.Controller.showSignIn();
        });
        
    });

    return App.Account.Controller;
});


