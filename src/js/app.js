import AppController from './appController';

const manager = new AppController('wss://lap-heroku-chaos.herokuapp.com');
manager.init();
