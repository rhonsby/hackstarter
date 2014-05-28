Hackstarter.Views.ProfilePage = Backbone.View.extend({
  template: JST['users/profile'],

  className: 'profile-page-content',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.footer = new Hackstarter.Views.Footer();
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.$el.append(this.footer.render().$el);
    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    this.footer.remove();
  }
});