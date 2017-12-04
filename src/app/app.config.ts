import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

    public Server = 'http://localhost:3000/';
    public ApiUrl = 'api/';
    public loginURL = '/';
    public commonAPIErrorMessage = 'Something went wrong';
    public APIRequestTimeout = 400;

    public dateformat = 'MM/dd/yyyy';
    public pageLimit = 5;

}
