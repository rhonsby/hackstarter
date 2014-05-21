window.Hackstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Hackstarter.Routers.Router({
      $rootEl: $('#main')
    });
  }
};

$(document).ready(function(){
  Hackstarter.initialize();
});
