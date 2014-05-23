Hackstarter.Models.Company = Backbone.Model.extend({
  urlRoot: 'api/companies',

  bbUrl: function () {
    return '#/companies/' + this.get('id');
  }
});