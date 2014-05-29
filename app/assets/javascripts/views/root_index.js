Hackstarter.Views.RootIndex = Backbone.View.extend({
  template: JST["root/index"],

  events: {
    "click a[data-toggle='tab']": 'handleTabSwitch',
  },

  initialize: function (options) {
    this.listenTo(Hackstarter.companies, 'sync', this.render);
    this.footer = new Hackstarter.Views.Footer();
  },

  handleTabSwitch: function (event) {
    event.preventDefault();
    $(event.currentTarget).tab('show');
  },

  showMainImage: function () {
    this.$('.main-image').removeClass('hidden');
  },

  hideMainImage: function () {
    this.$('main-image').addClass('hidden');
  },

  render: function () {
    var renderedContent = this.template({
      companies: this.collection
    });
    this.$el.html(renderedContent);
    this.$el.append(this.footer.render().$el);

    this.showMainImage();
    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    this.footer.remove();
    this.hideMainImage();
  }
});