Hackstarter.Views.CompanyNew = Backbone.View.extend({
  template: JST["companies/new"],

  events: {
    'submit #new-company-form': 'submit'
  },

  submit: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().company;
    var company = new Hackstarter.Models.Company(formData);

    company.save({}, {
      success: function () {
        Backbone.history.navigate(company.bbUrl(), { trigger: true });
      }
    });
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});