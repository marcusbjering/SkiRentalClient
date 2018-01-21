import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@inject(HttpClient)
export class SkiLengthCalculatorApi {

    constructor(httpClient) {
        this._httpClient = httpClient;
    }

    getLength() {
        return his._httpClient.fetch('');
    }
}