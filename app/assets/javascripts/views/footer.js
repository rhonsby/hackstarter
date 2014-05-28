Hackstarter.Views.Footer = Backbone.View.extend({
  template: JST['root/footer'],

  events: {
    'click .discover-link': 'handleDiscoverRedirect'
  },

  handleDiscoverRedirect: function (event) {
    event.preventDefault();
    // redirecting works, but page re-renders on fetch
    Backbone.history.navigate('#/discover');

    var sector = $(event.currentTarget).data('sector');
    var target = "a[href=#" + sector + "]";
    $(target).tab('show');
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.delegateEvents();

    return this;
  }
});