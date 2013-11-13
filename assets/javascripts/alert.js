(function() {

  Discourse.TopicFooterButtonsView.reopen({
    addAlertButton: function() {
      this.attachViewClass(Discourse.AlertButton);
    }.on("additionalButtons")
  });

  Discourse.AlertButton = Discourse.ButtonView.extend({
    text: 'alert',
    title: 'display the topic title in an alert',

    click: function(buffer) {
      alert(this.get("controller.content.title"));
    },

    renderIcon: function(buffer) {
      buffer.push("<i class='icon icon-warning-sign'></i>");
    }
  });

})();