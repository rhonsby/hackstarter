Hackstarter.Views.RootIndex = Backbone.View.extend({
  template: JST["root/index"],

  events: {
    "click a[data-toggle='tab']": 'handleTabSwitch',
  },

  initialize: function (options) {
    this.listenTo(Hackstarter.companies, 'sync', this.render);
    this.footer = new Hackstarter.Views.Footer();
    // this.listenTo(Hackstarter.currentUser, 'new-user', this.welcomeUser);
  },

  // welcomeUser: function () {
  //   $('#welcome-modal').modal({
  //     keyboard: true
  //   });
  // },

  handleTabSwitch: function (event) {
    event.preventDefault();
    $(event.currentTarget).tab('show');
  },

  showMainImage: function () {
    this.$('.main-image').removeClass('hidden');
    // this.$('.main-image').css('max-height', $(window).height() / 1.4);
  },

  hideMainImage: function () {
    this.$('main-image').addClass('hidden');
  },

  staffPicks: function () {
    return {
      sport: Hackstarter.companies.get(1)
    };
  },

  render: function () {
    var renderedContent = this.template({
      companies: Hackstarter.companies,
      staffPicks: this.staffPicks
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