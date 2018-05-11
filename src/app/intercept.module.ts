// import { Injectable, NgModule } from "@angular/core";
// import { HttpInterceptor, HttpRequest, HttpEvent, HTTP_INTERCEPTORS, HttpHandler } from "@angular/common/http";
// import { Observable } from "rxjs";

// @Injectable()
// export class HttpRequestInteceptor implements HttpInterceptor {

//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const dupReq = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', 'https://login.eveonline.com/oauth/token')});
        
//         return next.handle(dupReq);

//     }
// };

// @NgModule({
//     providers: [
//         {
//           provide: HTTP_INTERCEPTORS, useClass: HttpRequestInteceptor, multi: true
//         }
//     ]
// })
// export class InterceptorModule { }