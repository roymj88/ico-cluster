import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Router } from '@angular/router';
import { Configuration } from './../../../app.config';
// import { AuthGuard } from 'app/common/services/auth-service';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { LoaderService } from './../loader/loader.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class HttpService {
    notify: any;
    headers: Headers;
    options: RequestOptions;
    private loggedIn;
    private actionBaseUrl;

    constructor(
        private http: Http,
        private loaderService: LoaderService,
        private router: Router) {

        this.actionBaseUrl = environment.url;

        this.loggedIn = !!localStorage.getItem('token');

        this.options = new RequestOptions({ headers: this.headers });
    }

    createAuthorizationHeader(headers: Headers) {

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        const token = localStorage.getItem('token');
        const user_data = localStorage.getItem('user_data');
        const token_type = localStorage.getItem('token_type');

        if (localStorage.getItem('token')) {
            headers.append('Authorization', token_type + ' ' + token);
        }

    }

    public logout() {
        localStorage.removeItem('user_data');
        localStorage.removeItem('token');
        localStorage.removeItem('token_type');
        this.loggedIn = false;
        this.router.navigate(['/']);
    }

    public setLoggedIn(userData: any) {
        localStorage.setItem('user_data', JSON.stringify(userData.data));
        localStorage.setItem('token', userData.data.token);
        localStorage.setItem('token_type', 'Bearer');
        const loginSuccess = this.isLoggedIn();

        if (loginSuccess) {
            this.loggedIn = true;
            const that = this;
            setTimeout(function(){
                that.router.navigate(['dashboard/patient-home']);
            }, 500);
        }
    }

    public login = () => {


    }

    public isLoggedIn() {
        return (localStorage.getItem('token')) ? true : false;
    }

    public get(url: string, param: any): Observable<any> {
        this.requestInterceptor();
        const params: URLSearchParams = new URLSearchParams();
        for (const key in param) {
            if (param.hasOwnProperty(key)) {
                const val = param[key];
                params.set(key, val);
            }
        }

        const headers = new Headers();
        this.createAuthorizationHeader(headers);

        this.options = new RequestOptions({ headers: headers, search: params });
        return this.http
            .get(this.getBaseUrl(url), this.options)
            .map(this.extractData)
            .catch(this.handleError)
            .do((res: Response) => {
                this.onSubscribeSuccess(res, true);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    public post(url, data): Observable<any> {
        this.requestInterceptor();

        const headers = new Headers();
        this.createAuthorizationHeader(headers);

        this.options = new RequestOptions({ headers: headers });

        return this.http.post(this.getBaseUrl(url), data, this.options)
            .map(this.extractData)
            .catch(this.handleError)
            .do((res: Response) => {
                this.onSubscribeSuccess(res, true);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }


    // public create(url, data): Observable<any> {       //tharak

    //     this.requestInterceptor();
    //     const headers = new Headers({ 'Content-Type': 'application/json' });
    //     const options = new RequestOptions({ headers: this.headers });
    //     const body = JSON.stringify(data);
    //     // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
    //     return this.http.post(this.getBaseUrl(url), body, headers)
    //         .map(this.extractData)
    //         .catch(this.handleError)
    //         .do((res: Response) => {
    //             this.onSubscribeSuccess(res, true);
    //         }, (error: any) => {
    //             this.onSubscribeError(error);
    //         })
    //         .finally(() => {
    //             this.onFinally();
    //         });
    // }

    public put(url, data): Observable<any> {
        this.requestInterceptor();

        const headers = new Headers();
        this.createAuthorizationHeader(headers);

        this.options = new RequestOptions({ headers: headers });

        return this.http.put(this.getBaseUrl(url), data, this.options)
            .map(this.extractData)
            .catch(this.handleError)
            .do((res: Response) => {
                this.onSubscribeSuccess(res, true);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    public delete(url, data): Observable<any> {
        this.requestInterceptor();

        const headers = new Headers();
        this.createAuthorizationHeader(headers);

        this.options = new RequestOptions({ headers: headers });

        return this.http.delete(this.getBaseUrl(url), this.options)
            .map(this.extractData)
            .catch(this.handleError)
            .do((res: Response) => {
                this.onSubscribeSuccess(res, true);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    public uploadPost(url, dataToSend): Observable<any> {

        const headers = new Headers();
        headers.append('reference', dataToSend.reference);
        headers.append('referenceid', dataToSend.referenceid);

        const options = new RequestOptions({ headers: headers });

        return this.http.post(this.getBaseUrl(url), dataToSend.formData, options)
            .map(this.extractData)
            .catch(this.handleError)
            .do((res: Response) => {
                this.onSubscribeSuccess(res, true);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }



    public uploadPut(url, formData): Observable<any> {

        const headers = new Headers();
        const options = new RequestOptions({ headers: headers });

        return this.http.put(this.getBaseUrl(url), formData, options)
            .map(this.extractData)
            .catch(this.handleError)
            .do((res: Response) => {
                this.onSubscribeSuccess(res, true);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    private getBaseUrl(url) {
        return this.actionBaseUrl + url;
    }

    private extractData(res: Response) {
        const body = res.json();
        if (body) {
            return body;
        } else {
            return {};
        }
    }

    public handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        if (error.status === 401 || error.status === 403 ) {
            window.location.href = environment.loginURL;
        }
        const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);
        return Observable.throw(error);
    }

    /**
     * Request interceptor.
     */
    private requestInterceptor(): void {
        this.loaderService.showPreloader();
    }

    /**
     * Response interceptor.
     */
    private responseInterceptor(): void {
        this.loaderService.hidePreloader();
    }

    /**
     * onSubscribeSuccess
     * @param res
     */
    private onSubscribeSuccess(res: Response, isGetRequest?: boolean): void {
        // if (!isGetRequest && responseMessages) {
        //     this.notify.show(status, responseMessages);
        // }
    }

    /**
     * onSubscribeError
     * @param error
     */
    private onSubscribeError(error: any): void {

        // if (error.status === 440) {
        //     this.authService.sessionExpired('The Session is Expired');
        // } else if(error.status === 441){
        //     this.authService.sessionExpired('The current user is active in other logged in session');
        // } else {
        //     this.notify.show('ERROR');
        // }
    }

    /**
     * onFinally
     */
    private onFinally(): void {
        this.responseInterceptor();
    }


}
