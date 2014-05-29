Hackstarter.Views.Discover = Backbone.View.extend({
  template: JST['companies/discover'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.footer = new Hackstarter.Views.Footer();
  },

  render: function () {
    var renderedContent = this.template({ companies: this.collection });
    this.$el.html(renderedContent);
    this.$el.append(this.footer.render().$el);

    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    this.footer.remove();
  }
});