import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@inject(HttpClient)
export class App {
  constructor(httpClient) {
    httpClient.configure(config => {
      config
        .withBaseUrl('http://localhost/SkiRental/')
        .withDefaults({
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch',
          }
        })
    });
  }

  configureRouter(config, router) {
    config.title = 'Ski rental';
    config.map([
      { route: ['', 'ski-length-calculator'], name: 'ski-length-calculator', moduleId: 'modules/ski-length-calculator', nav: true, title: 'Calculate length' },
    ]);
    this.router = router;
  }
}
