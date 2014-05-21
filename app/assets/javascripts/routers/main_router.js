Hackstarter.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'index',
    'companies/new': 'newCompany',
  },

  index: function () {
    var indexView = new Hackstarter.Views.RootIndex();
    this._swapView(indexView);
  },

  newCompany: function () {
    var newView = new Hackstarter.Views.CompanyNew();
    this._swapView(newView);
  },

  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }

    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});