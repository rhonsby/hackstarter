window.Hackstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Hackstarter.companies = new Hackstarter.Collections.Companies();

    new Hackstarter.Routers.Router({
      $rootEl: $('#main')
    });
    Backbone.history.start();
  }
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}