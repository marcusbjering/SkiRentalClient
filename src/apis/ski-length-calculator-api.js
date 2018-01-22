import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@inject(HttpClient)
export class SkiLengthCalculatorApi {

    constructor(httpClient) {
        this._httpClient = httpClient;
        this.route = "crosscountryskis/";
    }

    getLength(height, age, type) {
        return this._httpClient.fetch(`${this.route}calculatelength?height=${height}&age=${age}&type=${type}`)
    }
}
