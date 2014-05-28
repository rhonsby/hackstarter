Hackstarter.Views.Updates = Backbone.View.extend({
  template: JST['companies/edit/company_update'],
  tagName: 'ul',
  className: 'edit-update-listing',

  initialize: function () {
    this.listenTo(this.model.updates(), 'add remove', this.render);
  },

  render: function () {
    var renderedContent = this.template({ company: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});