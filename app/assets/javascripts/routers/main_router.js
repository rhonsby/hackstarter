Hackstarter.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index',
    'companies/new': 'companyNew',
    'companies/:id/edit': 'companyEdit',
    'companies/:id': 'companyShow'
  },

  index: function () {
    var indexView = new Hackstarter.Views.RootIndex();
    this._swapView(indexView);
  },

  companyNew: function () {
    var newView = new Hackstarter.Views.CompanyNew();
    this._swapView(newView);
  },

  companyEdit: function (id) {
    var company = new Hackstarter.Models.Company({ id: id });
    company.fetch();

    var editView = new Hackstarter.Views.CompanyEdit({
      model: company
    });
    this._swapView(editView);
  },

  companyShow: function (id) {
    var company = new Hackstarter.Models.Company({ id: id });
    company.fetch();

    var showView = new Hackstarter.Views.CompanyShow({
      model: company
    });
    this._swapView(showView);
  },

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }

    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});