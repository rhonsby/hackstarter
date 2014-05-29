window.Hackstarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Hackstarter.companies = new Hackstarter.Collections.Companies();
    Hackstarter.sectors = new Hackstarter.Collections.Sectors();
    Hackstarter.users = new Hackstarter.Collections.Users();
    Hackstarter.companies.fetch();
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
  Hackstarter.isLoggedIn = true;

  var navView = new Hackstarter.Views.UserNav({
    model: user
  });

  $('#user-main-nav').html(navView.render().$el);
};

Hackstarter.growl = function (message) {
  $.bootstrapGrowl(message, {
    ele: 'body',
    type: 'success',
    offset: {from: 'top', amount: 80},
    align: 'right',
    delay: 4000,
    allow_dismiss: true,
    stackup_spacing: 10
  });
};