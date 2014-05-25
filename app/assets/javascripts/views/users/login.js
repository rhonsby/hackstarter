Hackstarter.Views.Login = Backbone.View.extend({
  template: JST['users/login'],

  events: {
    'submit form': 'handleLogin'
  },

  handleLogin: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().user;
    var session = new Hackstarter.Models.Session(formData);
    var view = this;

    session.save({}, {
      success: function (resp) {
        var user = new Hackstarter.Models.User(resp.attributes, { parse: true });
        Hackstarter.loginUser(user);
        Backbone.history.navigate('', { trigger: true });
      }
    });
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});