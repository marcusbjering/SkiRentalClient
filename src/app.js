export class App {
  configureRouter(config, router) {
    config.title = 'Ski rental';
    config.map([
      { route: ['', 'rent'], name: 'rent', moduleId: 'rent', nav: true, title: 'Rent' },
    ]);
    this.router = router;
  }
}
