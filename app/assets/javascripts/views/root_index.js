Hackstarter.Views.RootIndex = Backbone.View.extend({
  template: JST["root/index"],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});