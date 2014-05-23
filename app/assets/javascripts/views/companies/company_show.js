Hackstarter.Views.CompanyShow = Backbone.View.extend({
  template: JST['companies/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.updateStats);
  },

  events: {
    "click a[data-toggle='pill']": 'handleTabSwitch',
    'submit .pledge-form': 'handlePledge',
    'click #pledge-submit': 'handleSubmit',
  },

  handleSubmit: function (event) {
    this.$('.pledge-form').submit();
  },

  handlePledge: function (event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON().investment;
    var investment = new Hackstarter.Models.Investment(formData);
    view = this;

    investment.save({}, {
      success: function () {
        $('#pledge-amount').val('');
        view.model.fetch();
        view.closeModal();
      }
    });
  },

  closeModal: function () {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').fadeOut('fast', function () {
      this.remove();
    });
  },

  handleTabSwitch: function (event) {
    event.preventDefault();
    $(event.currentTarget).tab('show');
  },

  updateStats: function () {
    this.$('.investor-count').html(
      this.model.get('investors').length
    );
    this.$('.investment-goal').html(this.model.escape('investment_goal'));
    this.$('.amount-raised').html('$' +
      numberWithCommas(this.model.escape('amount_raised') || 0)
    );
    this.$('.days-left').html(this.model.escape('days_left') || 0);
    this.$('div.company-pitch').html(marked(this.model.escape('pitch')));
    this.$('div.company-market').html(marked(this.model.escape('market')));


    // crappy fix, but works for now.
    if (this.model.get('main_photo_url') !== 'missing_small.png') {
      this.$('#company-show-photo').attr(
        'src', this.model.escape('main_photo_url')
      );
    }

    // var li;
    // var $investorsPanel = $('.investors-panel');
    // // subview for users?
    // _(this.model.get('investors')).each(function (investor) {
    //   li = $('<li>');
    //   li.addClass('investor-panel')
    //   li.html(investor.username);
    //   $investorsPanel.append(li);
    // });
  },

  render: function () {
    var renderedContent = this.template({ company: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});