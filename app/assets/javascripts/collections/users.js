Hackstarter.Collections.Users = Backbone.Collection.extend({
  url: 'api/users',
  model: Hackstarter.Models.User,

  getOrFetch: function (id) {
    var users = this;
    var user = this.get(id);

    if (!user) {
      user = new Hackstarter.Models.User({ id: id });
      user.fetch({
        success: function () {
          users.add(user);
        }
      });
    } else {
      user.fetch();
    }

    return user;
  },

  reverse: function () {
    return this.models.reverse();
  }
});