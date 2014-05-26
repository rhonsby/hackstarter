Hackstarter.Views.ProfilePage = Backbone.View.extend({
  template: JST['users/profile'],

  className: 'profile-page-content',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.$el.append(JST['root/footer']());
    return this;
  }
});