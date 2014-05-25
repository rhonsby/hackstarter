Hackstarter.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    router = this;
  },

  routes: {
    '': 'index',
    'signup': 'userSignup',
    'login': 'userLogin',
    'companies/new': 'companyNew',
    'companies/:id/edit': 'companyEdit',
    'companies/:id': 'companyShow',
  },

  index: function () {
    Hackstarter.companies.fetch();

    var $altEl = $('#index-main');
    var indexView = new Hackstarter.Views.RootIndex();
    this._swapView(indexView, $altEl);
  },

  userSignup: function () {
    this.requireSignout(function () {
      var signupView = new Hackstarter.Views.Signup();
      router._swapView(signupView);
    });
  },

  userLogin: function () {
    this.requireSignout(function () {
      var loginView = new Hackstarter.Views.Login();
      router._swapView(loginView);
    });
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
    var company = new Hackstarter.Models.Company({ id: id });
    company.fetch();

    var editView = new Hackstarter.Views.CompanyEdit({
      model: company,
      sectors: Hackstarter.sectors
    });
    this._swapView(editView);
  },

  companyShow: function (id) {
    var company = new Hackstarter.Models.Company({ id: id });
    company.fetch();

    var showView = new Hackstarter.Views.CompanyShow({
      model: company,
    });
    this._swapView(showView);
  },

  _swapView: function (view, $altEl) {
    if (this._currentView) {
      this._currentView.remove();
    }

    var $renderEl = $altEl || this.$rootEl;

    this._currentView = view;
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
    if (id === Hackstarter.currentUser) {
      callback();
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