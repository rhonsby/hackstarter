Hackstarter.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  parse: function (resp) {
    if (resp.companies) {
      this.companies().set(resp.companies);
      delete resp.companies;
    }

    return resp;
  },

  companies: function () {
    if (!this._companies) {
      this._companies = new Hackstarter.Collections.Companies([], {
        founder: this
      });
    }

    return this._companies;
  }
});