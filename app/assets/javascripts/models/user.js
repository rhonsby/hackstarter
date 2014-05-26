Hackstarter.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  parse: function (resp) {
    if (resp.companies) {
      this.companies().set(resp.companies);
      delete resp.companies;
    }

    if (resp.backedCompanies) {
      this.backedCompanies().set(resp.backedCompanies);
      delete resp.backedCompanies;
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
  },

  backedCompanies: function () {
    if (!this._backedCompanies) {
      this._backedCompanies = new Hackstarter.Collections.Companies([], {
        found: this
      });
    }

    return this._backedCompanies;
  },

  bbUrl: function () {
    return '#/profile/' + this.escape('id');
  }
});