var ArticleFormView = Backbone.View.extend({
  tagName: 'form',

  template: _.template($('#article-form-template').html()),

  events: {
    'submit': 'submit'
  },

  bindings: {
    '#article-title': 'title',
    '#article-summary': 'summary'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    this.stickit();

    return this;
  },

  submit: function(e) {
    e.preventDefault();
  }
});