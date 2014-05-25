Hackstarter.Views.UserNav = Backbone.View.extend({
  template: JST['users/nav'],

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});