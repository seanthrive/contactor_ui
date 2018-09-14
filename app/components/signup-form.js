import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
	ajax: service(),

	actions: {
		signup() {

			let id = this.getProperties('identification').identification;
			let pw = this.getProperties('password').password;

			this.get('ajax').request('/users', {
				method: 'POST',
				data: 
				{
					user: {
						email: id,
						password: pw
					}
				}
			});

			// let authenticator = "authenticator:devise";
			// let session = this.get('session');
			// let id = this.getProperties('identification').identification;
			// let pw = this.getProperties('password').password;

			// console.log(session, id, pw);

			// return session.authenticate(authenticator, id, pw)
			// .then((data) => {
			// 	console.log(data);
			// })
			// .catch((reason) => {
		 //    	console.log(reason.error);
		 //    });
		}
	}
})