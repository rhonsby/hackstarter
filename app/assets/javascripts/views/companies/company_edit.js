Hackstarter.Views.CompanyEdit = Backbone.View.extend({
  template: JST['companies/edit'],

  render: function () {
    var renderedContent = this.template({ company: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});