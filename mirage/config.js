export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.get('/files', function() {
    return {
      data: [
        {
          type: "files",
          id: 1,
          attributes: {
            name: "Document example 1.docx",
            path: "/file/Document example 1.docx",
            size: 10000,
            filetype: "ms word document",
            modified: "2016-06-03 12:00:00"
          }
        },
        {
          type: "files",
          id: 2,
          attributes: {
            name: "Folder 1",
            path: "/file/Folder 1",
            size: 0,
            filetype: "folder",
            modified: "2016-06-03 12:00:00"
          }
        },
      ]
    };
  });
}
