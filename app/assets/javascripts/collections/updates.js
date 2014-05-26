Hackstarter.Collections.Updates = Backbone.Collection.extend({
  model: Hackstarter.Models.Update,

  reverse: function () {
    return this.models.reverse();
  }
});