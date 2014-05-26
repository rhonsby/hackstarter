Hackstarter.Views.CompanyEdit = Backbone.View.extend({
  template: JST['companies/edit'],

  className: 'company-form',

  initialize: function (options) {
    this.sectors = options.sectors;
    this.reader = new FileReader();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.sectors, 'sync', this.render);
  },

  events: {
    "click a[data-toggle='tab']": 'handleTabSwitch',
    'keyup input': 'updatePreview',
    'keyup textarea': 'updatePreview',
    'change #company-photo': 'processPhoto',
    'submit #new-company-form': 'handleCompanyUpdate',
    'submit #update-modal-form': 'handleUpdateChanges'
  },

  handleTabSwitch: function (event) {
    event.preventDefault();
    $(event.currentTarget).tab('show');
  },

  handleCompanyUpdate: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().company;
    this.model.set(formData);
    this.model.save();
  },

  handleUpdateChanges: function (event) {
    event.preventDefault();
    var $form = $(event.currentTarget);
    var updateId = $form.attr('data-update-id');
    var formData = $form.serializeJSON().update;
    var update = this.model.updates().get(updateId);
    var view = this;

    update.save(formData, {
      success: function () {
        $('.modal').modal('hide');
        view.closeModal(event);
      }
    });
  },

  closeModal: function () {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').fadeOut('fast', function () {
      this.remove();
    });
  },

  processPhoto: function (event) {
    var file = $(event.currentTarget)[0].files[0];

    var that = this;
    this.$('.progress').removeClass('hidden');
    this.$('#company-photo').addClass('hidden');

    this.$('.progress-bar').css('width', '100%');
    this.reader.onload = function (e) {
      that.model.set({ photo: e.target.result });
      that.model.save();
    };

    this.reader.readAsDataURL(file);
  },

  updatePreview: function (event) {
    var field = $(event.currentTarget);
    switch (field.attr('name')) {
      case 'update[title]':
        debugger
        var target = 'a[data-target=' + field.attr('data-title-field') + "]";
        $(target).html($(event.currentTarget).val());
        break;
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

  render: function () {
    var renderedContent = this.template({
      company: this.model,
      sectors: this.sectors
    });
    this.$el.html(renderedContent);
    return this;
  }
});