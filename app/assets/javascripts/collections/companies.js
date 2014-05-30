Hackstarter.Collections.Companies = Backbone.Collection.extend({
  url: 'api/companies',
  model: Hackstarter.Models.Company,

  getOrFetch: function(id) {
    var companies = this;
    var company = this.get(id);

    if (!company) {
      company = new Hackstarter.Models.Company({ id: id });
      company.fetch({
        success: function () {
          companies.add(company);
        }
      });
    } else {
      company.fetch();
    }

    return company;
  },

  popular: function (n) {
    var companies = this.select(function (company) {
      return company.escape('investor_count') > 5 ||
        company.escape('percentage_raised') > 70 ||
        company.escape('amount_raised') > 0;
    });

    return _(companies).sample(n);
  },

  recent: function (n) {
    var recent = this.last(n + 2);
    return recent.length ? _(recent).sample(n) : [];
  },

  ending: function (n) {
    var companies = this.select(function (company) {
      return company.escape('days_left') < 10 && company.escape('days_left') > 0;
    });

    return _(companies).sample(n);
  },

  mostFunded: function (n) {
    var companies = this.select(function (company) {
      return company.escape('percentage_raised') > 80;
    });

    return _(companies).sample(n);
  },

  findBySector: function (sector) {
    return this.where({ sector: sector });
  },

  findByLocation: function (location) {
    return this.where({ location: location });
  }
});