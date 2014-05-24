Hackstarter.Views.RootIndex = Backbone.View.extend({
  template: JST["root/index"],

  toggleMainImage: function () {
    this.$('.main-image').toggleClass('hidden');
    this.$('.main-image').css('max-height', $(window).height() / 1.2);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.toggleMainImage();
    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    this.toggleMainImage();
  }
});