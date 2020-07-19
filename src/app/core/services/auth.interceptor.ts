import { environment } from './../../../environments/environment';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  /**
   * Interceptor: Key parameter added for all requests
   * @param req request
   * @param next next
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      setParams: {
        key: environment.key
      }
    });
    return next.handle(cloned).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );

  }
}
