Hackstarter.Views.Discover = Backbone.View.extend({
  template: JST['companies/discover'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({ companies: this.collection });
    this.$el.html(renderedContent);
    this.$el.append(JST['root/footer']());

    return this;
  }
});