// import Ember from 'ember';
import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
// import { inject as service } from '@ember/service';

export default Route.extend(UnauthenticatedRouteMixin);

// , 
// {
// 	// session: service(),

// 	// actions: {
// 	// 	authenticate() {
// 	// 		// Either look at frontend/app/routes/login.js (ember-simple-auth)
// 	// 		let authenticator = "authenticator:devise";
// 	// 		let session = this.get('session');
// 	// 		let id = this.get('controller.identification');
// 	// 		let pw = this.get('controller.password');
// 	// 		console.log(session.isAuthenticated, id, pw);
// 	// 		return session.authenticate(authenticator, id, pw).catch((reason) => {
// 	// 	    	console.log(reason.error);
// 	// 	    });
// 	// 	}
// 	// }
// }