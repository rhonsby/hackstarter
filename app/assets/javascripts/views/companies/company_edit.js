Hackstarter.Views.CompanyEdit = Backbone.View.extend({
  template: JST['companies/edit'],

  className: 'company-form',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.reader = new FileReader();
  },

  events: {
    "click a[data-toggle='tab']": 'handleTabSwitch',
    'keyup input': 'updatePreview',
    'keyup textarea': 'updatePreview',
    'change #company-photo': 'processPhoto',
    'submit form': 'handleUpdate',
  },

  handleTabSwitch: function (event) {
    event.preventDefault();
    var $tab = $(event.currentTarget);
    $tab.tab('show');
  },

  handleUpdate: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().company;
    this.model.set(formData);
    this.model.save();
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
    debugger
    var renderedContent = this.template({ company: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});