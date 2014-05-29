Hackstarter.Views.CompanyShow = Backbone.View.extend({
  template: JST['companies/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.comments(), 'add remove', this.updateStats);
    this.companyCommentsView = new Hackstarter.Views.CommentsShow({ model: this.model });
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

    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    this.companyCommentsView.remove();
  }
});