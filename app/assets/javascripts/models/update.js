Hackstarter.Models.Update = Backbone.Model.extend({
  urlRoot: 'api/updates',

  parse: function (resp) {
    if (resp.comments) {
      this.comments().set(resp.comments);
      delete resp.comments;
    }

    return resp;
  },

  comments: function () {
    if (!this._comments) {
      this._comments = new Hackstarter.Collections.Comments();
    }

    return this._comments;
  }
});