Hackstarter.Collections.Users = Backbone.Collection.extend({
  model: Hackstarter.Models.User,

  reverse: function () {
    return this.models.reverse();
  }
});