Hackstarter.Views.CommentsShow = Backbone.View.extend({
  template: JST['companies/show/company_comments'],

  initialize: function (options) {
    this.company = options.company;
    this.commentableType = options.commentableType;
    this.listenTo(this.model.comments(), 'add', this.render);
    this.listenTo(this.model.comments(), 'remove', this.render);
  },

  events: {
    'submit #new-comment-form': 'handleSubmit',
    'click .comment-delete-btn': 'handleDelete'
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

  handleDelete: function (event) {
    var commentID = $(event.currentTarget).data('id');
    var comment = this.model.comments().get(commentID);

    comment.destroy();
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
    var renderedContent = this.template({
      model: this.model,
      company: this.company,
      commentableType: this.commentableType
    });
    this.$el.html(renderedContent);
    this.$('abbr.timeago').timeago();
    this.delegateEvents();

    return this;
  }
});