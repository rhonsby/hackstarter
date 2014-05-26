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

    return resp;
  },

  founder: function () {
    if (!this._founder) {
      this._founder = new Hackstarter.Models.User();
    }

    return this._founder;
  }
});