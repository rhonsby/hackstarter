window.Hackstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Hackstarter.companies = new Hackstarter.Collections.Companies();
    Hackstarter.sectors = new Hackstarter.Collections.Sectors();
    Hackstarter.sectors.fetch();

    new Hackstarter.Routers.Router({
      $rootEl: $('#main')
    });
    Backbone.history.start();
  }
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

Hackstarter.loginUser = function (user) {
  Hackstarter.currentUser = user;

  $('.signed-out').addClass('hidden');
  // var navView = Hackstarter.Views.UserNav({ model: user });
  $('.signed-in').html(JST['users/nav']({ user: user }));
};