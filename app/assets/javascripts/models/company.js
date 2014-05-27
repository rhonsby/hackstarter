Hackstarter.Models.Company = Backbone.Model.extend({
  urlRoot: 'api/companies',

  bbUrl: function () {
    return '#/companies/' + this.get('id');
  },

  parse: function (resp) {
    if (resp.founder) {
      this.founder().set(resp.founder);
      delete resp.founder;
    }

    if (resp.updates) {
      this.updates().set(resp.updates);
      delete resp.updates;
    }

    if (resp.investors) {
      this.investors().set(resp.investors);
      delete resp.investors;
    }

    return resp;
  },

  founder: function () {
    if (!this._founder) {
      this._founder = new Hackstarter.Models.User();
    }

    return this._founder;
  },

  updates: function () {
    if (!this._updates) {
      this._updates = new Hackstarter.Collections.Updates();
    }

    return this._updates;
  },

  investors: function () {
    if (!this._investors) {
      this._investors = new Hackstarter.Collections.Users();
    }

    return this._investors;
  }
});