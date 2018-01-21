export class App {
  configureRouter(config, router) {
    config.title = 'Ski rental';
    config.map([
      { route: ['', 'ski-length-calculator'], name: 'ski-length-calculator', moduleId: 'ski-length-calculator', nav: true, title: 'Calculate length' },
    ]);
    this.router = router;
  }
}
