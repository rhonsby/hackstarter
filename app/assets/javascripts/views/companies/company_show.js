Hackstarter.Views.CompanyShow = Backbone.View.extend({
  template: JST['companies/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.updateStats);
  },

  updateStats: function () {
    this.$('.investor-count').html(
      this.model.get('investors').length
    );

    this.$('#company-show-photo').attr('src', this.model.escape('main_photo_url'));
  },

  render: function () {
    var renderedContent = this.template({ company: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});