window.Hackstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Hackstarter.Routers.Router({
      $rootEl: $('#main')
    });
    Backbone.history.start();
  }
};