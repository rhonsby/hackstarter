Hackstarter.Views.UserNav = Backbone.View.extend({
  template: JST['users/nav'],
  tagName: 'li',
  className: 'drop-drop signed-in',

  initialize: function (options) {
    this.listenTo(this.model.companies(), 'add', this.render);
  },

  events: {
    'click #sign-out-link': 'handleSignOut'
  },

  handleSignOut: function (event) {
    event.preventDefault();

    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success: function () {
        Hackstarter.currentUser = false;
        Hackstarter.isLoggedIn = false;
        $('#user-main-nav').html(JST['users/signed_out_nav']());
        Backbone.history.navigate('', { trigger: true });
      }
    });
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});