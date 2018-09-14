import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
	session: service('session'),

	router: service(),

	actions: {
		authenticate() {

			let authenticator = "authenticator:devise";
			let session = this.get('session');
			let id = this.getProperties('identification').identification;
			let pw = this.getProperties('password').password;

			// console.log(id, pw);

			return session.authenticate(authenticator, id, pw)
			.then((data) => {
				this.get('router').transitionTo('homepage');
			})
			.catch((reason) => {
				this.get('router').transitionTo('homepage');
		    	console.log(reason.error);
		    });
		}
	}
})