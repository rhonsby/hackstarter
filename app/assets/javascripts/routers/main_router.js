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
    var $altEl = $('#index-main');
    var indexView = new Hackstarter.Views.RootIndex();
    this._swapView(indexView, $altEl);
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

  _swapView: function (view, $altEl) {
    if (this._currentView) {
      this._currentView.remove();
    }

    var $renderEl = $altEl || this.$rootEl;

    this._currentView = view;
    $renderEl.html(view.render().$el);
  }
});