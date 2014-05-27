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
        view.hideErrors();

        Hackstarter.loginUser(user);
        Backbone.history.navigate('', { trigger: true });
        // user.trigger('new-user');
      },
      error: function (model, resp) {
        var errors = resp.responseJSON.errors;
        errors = _(errors).map(function (error) {
          return error === "password_digest" ? "password" : error;
        });
        view.showErrors(errors);
      }
    });
  },

  hideErrors: function () {
    $('label').removeClass('label-error');
  },

  showErrors: function (errors) {
    this.hideErrors();

    _(errors).each(function (error) {
      var field = 'label[for=user_' + error + ']';
      var $label = $(field);
      $label.addClass('label-error');
    });
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});