import Component from '@ember/component';
import { inspect } from '@ember/debug';

export default Component.extend({
	actions: {
		showPerson(person) {
			alert(inspect(person));
		}
	}
});
