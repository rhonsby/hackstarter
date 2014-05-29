Hackstarter.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$altEl = $('#index-main');

    router = this;
  },

  routes: {
    '': 'index',
    'signup': 'userSignup',
    'login': 'userLogin',
    'settings': 'userSettings',
    'contact': 'contact',
    'discover': 'discover',
    'profile/:id': 'profilePage',
    'companies/new': 'companyNew',
    'companies/:id/edit': 'companyEdit',
    'companies/:id': 'companyShow',
  },

  index: function () {
    Hackstarter.companies.fetch();

    var indexView = new Hackstarter.Views.RootIndex({
      collection: Hackstarter.companies
    });
    router._swapView(indexView, router.$altEl);
  },

  discover: function () {
    Hackstarter.companies.fetch();
    Hackstarter.sectors.fetch();

    var discoverView = new Hackstarter.Views.Discover({
      collection: Hackstarter.companies
    });
    router._swapView(discoverView, router.$altEl);
  },

  userSignup: function () {
    router.requireSignout(function () {
      var signupView = new Hackstarter.Views.Signup();
      router._swapView(signupView);
    });
  },

  userLogin: function () {
    router.requireSignout(function () {
      var loginView = new Hackstarter.Views.Login();
      router._swapView(loginView);
    });
  },

  userSettings: function () {
    router.requireLogin(function () {
      var settingsView = new Hackstarter.Views.Settings({
        model: Hackstarter.currentUser
      });

      router._swapView(settingsView, router.$altEl);
    });
  },

  contact: function () {
    var contactView = new Hackstarter.Views.Contact();
    router._swapView(contactView);
  },

  profilePage: function (id) {
    var user = Hackstarter.users.getOrFetch(id);

    var profileView = new Hackstarter.Views.ProfilePage({ model: user });
    router._swapView(profileView, router.$altEl);
  },

  companyNew: function () {
    router.requireLogin(function () {
      var newView = new Hackstarter.Views.CompanyNew({
        sectors: Hackstarter.sectors
      });
      router._swapView(newView);
    });
  },

  companyEdit: function (id) {
    router.requireLogin(function () {
      router.requireAuth(id, function (company) {

        var editView = new Hackstarter.Views.CompanyEdit({
          model: company,
          sectors: Hackstarter.sectors
        });
        router._swapView(editView);
      });
    });
  },

  companyShow: function (id) {
    // var company = new Hackstarter.Models.Company({ id: id });
    // company.fetch();
    var company = Hackstarter.companies.getOrFetch(id);

    var showView = new Hackstarter.Views.CompanyShow({
      model: company,
    });
    router._swapView(showView);
  },

  _swapView: function (view, $altEl) {
    if (router._currentView) {
      router._currentView.remove();
    }

    var $renderEl = $altEl || router.$rootEl;

    router._currentView = view;
    $renderEl.html(view.render().$el);
  },

  requireLogin: function (callback) {
    if (Hackstarter.currentUser) {
      callback();
    } else {
      Backbone.history.navigate('#/login', { trigger: true });
    }
  },

  requireAuth: function (id, callback) {
    var company = Hackstarter.currentUser.companies().get(id);
    if (company) {
      company.fetch();
      callback(company);
    } else {
      Backbone.history.navigate('', { trigger: true });
    }
  },

  requireSignout: function (callback) {
    if (Hackstarter.currentUser) {
      Backbone.history.navigate('', { trigger: true });
    } else {
      callback();
    }
  }
});