import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepting request ...');
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth','test')
        });
        return next.handle(modifiedRequest);
    }
}