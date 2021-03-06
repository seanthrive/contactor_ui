import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  
  this.route('login');
  this.route('signup');
  // this.route('reset-password');

  this.route('scientists');

  this.route('homepage');
  
});

export default Router;
