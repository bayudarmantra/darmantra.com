import Ember from 'ember';

export default Ember.Component.extend({

  formattedDate: function() {
    var date = this.get('file').get('modified');
    return moment(date).format("MM/DD/YYYY HH:mm");
  }.property('file.modified'),

  formattedSize: function() {
    var bytes = this.get('file').get('size');
    var type = this.get('file').get('filetype');

    if(type == 'folder')
    {
      return '-';
    }
    else
    {
      if(bytes < 1024) return bytes + " Bytes";
      else if(bytes < 1048576) return(bytes / 1024).toFixed(3) + " KB";
      else if(bytes < 1073741824) return(bytes / 1048576).toFixed(3) + " MB";
      else return(bytes / 1073741824).toFixed(3) + " GB";
    }

  }.property('file.size'),

  icon: function() {
    var type = this.get('file').get('filetype');
    var defaultIcon = 'fa-file-o';

    if(type == 'folder')
    {
      defaultIcon = 'fa-folder-o';
    }

    return defaultIcon;

  }.property('file.filetype')
});
