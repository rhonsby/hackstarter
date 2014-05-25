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

  var navView = new Hackstarter.Views.UserNav({
    model: user
  });

  $('#user-main-nav').html(navView.render().$el);
};

// Hackstarter._swapNav = function (view) {
//   if (this._currentNav) {
//     this._currentNav.remove();
//   }

//   this._currentNav = view;
//   $('#user-main-nav').html(view.render().$el);
// };

