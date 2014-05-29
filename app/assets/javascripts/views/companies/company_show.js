Hackstarter.Views.CompanyShow = Backbone.View.extend({
  template: JST['companies/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.addUpdateComments);
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.comments(), 'add remove', this.updateStats);

    this.companyCommentsView = new Hackstarter.Views.CommentsShow({
      model: this.model,
      company: this.model,
      commentableType: 'Company'
    });
  },

  events: {
    'click #pledge-submit': 'handleSubmit',
    'submit .pledge-form': 'handlePledge'
  },

  handleSubmit: function (event) {
    this.$('.pledge-form').submit();
  },

  handlePledge: function (event) {
    event.preventDefault();

    $form = $(event.currentTarget);
    var formData = $form.serializeJSON().investment;
    var investment = new Hackstarter.Models.Investment(formData);
    view = this;

    investment.save({}, {
      success: function () {
        $form[0].reset();
        view.model.fetch();
        view.closeModal();
      }
    });
  },

  addUpdateComments: function () {
    if (this.model.updates().length) {
      this.updateCommentsView = new Hackstarter.Views.CommentsShow({
        model: this.model.updates().last(),
        company: this.model,
        commentableType: 'Update'
      });
    }
  },

  updateStats: function () {
    $('.comment-count').html(this.model.comments().length);
  },

  closeModal: function () {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').fadeOut(function () {
      this.remove();
    });
  },

  render: function () {
    var renderedContent = this.template({ company: this.model });
    this.$el.html(renderedContent);
    this.$('#comments').append(this.companyCommentsView.render().$el);

    if (this.updateCommentsView) {
      this.$('.company-update-comments').append(this.updateCommentsView.render().$el);
    }

    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    this.companyCommentsView.remove();
    if (this.updateCommentsView) this.updateCommentsView.remove();
  }
});