Hackstarter.Views.CompanyNew = Backbone.View.extend({
  template: JST["companies/new"],

  className: 'company-form',

  events: {
    'submit #new-company-form': 'submit',
    'keyup input': 'updatePreview',
    'keyup textarea': 'updatePreview'
  },

  initialize: function (options) {
    this.sectors = options.sectors;
    this.listenTo(this.sectors, 'sync', this.render);
  },

  updatePreview: function (event) {
    var field = $(event.currentTarget);
    switch (field.attr('name')) {
      case 'company[name]':
        $('#preview-title').html(field.val());
        break;
      case 'company[blurb]':
        $('#preview-blurb').html(field.val());
        break;
      case 'company[location]':
        $('#preview-location').html(field.val());
        break;
    }
  },

  submit: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().company;
    var company = new Hackstarter.Models.Company(formData);

    company.save({}, {
      success: function () {
        Hackstarter.currentUser.companies().add(company);
        Backbone.history.navigate(company.bbUrl(), { trigger: true });
      }
    });
  },

  render: function () {
    var renderedContent = this.template({
      company: this.model,
      sectors: this.sectors
    });
    this.$el.html(renderedContent);
    return this;
  }
});