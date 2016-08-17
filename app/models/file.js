import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  path: DS.attr('string'),
  size: DS.attr('number'),
  filetype: DS.attr('string'),
  modified: DS.attr('date')
});
