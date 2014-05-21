Hackstarter.Views.CompanyNew = Backbone.View.extend({
  template: JST["companies/new"],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});