Hackstarter.Views.CompanyShow = Backbone.View.extend({
  template: JST['companies/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.updateStats);
  },

  events: {
    "click a[data-toggle='pill']": 'handleTabSwitch',
  },

  handleTabSwitch: function (event) {
    event.preventDefault();
    var $tab = $(event.currentTarget);
    $tab.tab('show');
  },

  updateStats: function () {
    this.$('.investor-count').html(
      this.model.get('investors').length
    );

    // crappy fix, but works for now.
    if (this.model.get('main_photo_url') !== 'missing_small.png') {
      this.$('#company-show-photo').attr('src', this.model.escape('main_photo_url'));
    }
  },

  render: function () {
    var renderedContent = this.template({ company: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});