Hackstarter.Views.CompanyNew = Backbone.View.extend({
  template: JST["companies/new"],

  className: 'company-form',

  events: {
    'keyup input': 'updatePreview',
    'keyup textarea': 'updatePreview',
    'submit #new-company-form': 'submit'
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
    var view = this;

    company.save({}, {
      success: function () {
        view.hideErrors();

        Hackstarter.companies.add(company);
        Hackstarter.currentUser.companies().add(company);
        Backbone.history.navigate(company.bbUrl(), { trigger: true });
      },
      error: function (model, resp) {
        var errors = resp.responseJSON.errors;
        view.showErrors(errors);
      }
    });
  },

  hideErrors: function () {
    $('label').removeClass('label-error');
  },

  showErrors: function (errors) {
    this.hideErrors();

    _(errors).each(function (error) {
      var field = 'label[for=company_' + error + ']';
      var $label = $(field);
      $label.addClass('label-error');
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