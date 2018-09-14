import DS from 'ember-data';

export default DS.Model.extend({
	username: DS.attr('string'),
	password: DS.attr('string'),
	created_at: DS.attr('date'),
	updated_at: DS.attr('date'),
	email: DS.attr('string')
});