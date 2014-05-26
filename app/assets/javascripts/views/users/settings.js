Hackstarter.Views.Settings = Backbone.View.extend({
  template: JST['users/settings'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.reader = new FileReader();
  },

  events: {
    'change #user-avatar': 'processAvatar',
    'submit #settings-form': 'handleUpdate'
  },

  handleUpdate: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().user;
    this.model.set(formData);
    this.model.save();
  },

  processAvatar: function (event) {
    var file = $(event.currentTarget)[0].files[0];

    var that = this;
    this.$('.progress').removeClass('hidden');
    this.$('#user-avatar').addClass('hidden');

    this.$('.progress-bar').css('width', '100%');
    this.reader.onload = function (e) {
      that.model.set({ avatar: e.target.result });
      that.model.save();
    };

    this.reader.readAsDataURL(file);
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});