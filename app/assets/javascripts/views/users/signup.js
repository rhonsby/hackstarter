Hackstarter.Views.Signup = Backbone.View.extend({
  template: JST['users/signup'],

  events: {
    'submit form': 'handleSignup'
  },

  handleSignup: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().user;
    var user = new Hackstarter.Models.User(formData);
    var view = this;

    user.save({}, {
      success: function (resp) {
        Hackstarter.loginUser(user);
        Backbone.history.navigate('', { trigger: true });
        // user.trigger('new-user');
      }
    });
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});