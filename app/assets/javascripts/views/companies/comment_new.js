Hackstarter.Views.CommentsShow = Backbone.View.extend({
  template: JST['companies/show/company_comments'],

  initialize: function () {
    this.listenTo(this.model.comments(), 'add', this.render);
  },

  events: {
    'submit #new-comment-form': 'handleSubmit'
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().comment;
    var comment = new Hackstarter.Models.Comment(formData);
    var view = this;

    comment.save({}, {
      success: function () {
        view.hideErrors();
        view.model.comments().add(comment, { at: 0 });
      },
      error: function (model, resp) {
        var errors = resp.responseJSON.errors;
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
      var field = 'label[for=comment_' + error + ']';
      var $label = $(field);
      $label.addClass('label-error');
    });
  },

  render: function () {
    var renderedContent = this.template({ company: this.model });
    this.$el.html(renderedContent);
    this.$('abbr.timeago').timeago();
    this.delegateEvents();

    return this;
  }
});