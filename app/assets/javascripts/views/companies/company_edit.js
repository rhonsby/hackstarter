Hackstarter.Views.CompanyEdit = Backbone.View.extend({
  template: JST['companies/edit'],

  className: 'company-form',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    "click a[data-toggle='tab']": 'handleTabSwitch',
    'keyup input': 'updatePreview',
    'keyup textarea': 'updatePreview',
    // 'submit form': 'handleUpdate',
    'change #company-photo': 'processPhoto'
  },

  // updateCardData: function () {
  //   debugger
  //   $('#preview-title').html(this.model.escape('name'));
  //   $('#preview-blurb').html(this.model.escape('blurb'));
  //   $('#preview-location').html(this.model.escape('location'));
  //   $('#preview-company-photo').attr('src', this.model.escape('photo_url'));
  // },

  handleTabSwitch: function (event) {
    event.preventDefault();
    var $tab = $(event.currentTarget);
    $tab.tab('show');
  },

  processPhoto: function (event) {
    var that = this;
    var uploadFrame = $('#add-photo-form');
    uploadFrame.prop('target', 'upload_frame');
    uploadFrame.submit();

    // fetching before submitting is done. causes problem.
    // this.model.fetch();
  },

  // handleUpdate: function (event) {
  //   event.preventDefault();
  // },

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
    var renderedContent = this.template({ company: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});