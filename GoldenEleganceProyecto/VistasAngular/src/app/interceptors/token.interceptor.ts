import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.auth.getToken();
    console.log(myToken)

    if(myToken){
     request = request.clone({ 
        setHeaders: {Authorization: `Bearer ${myToken}`} //"Bearer " +myToken
      }) 
    }
    return next.handle(request).pipe(
      catchError((err: any)=>{
        if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          console.log("Eror")
        }
      }
      return throwError(()=>new Error("Ocurrio un error"))
      })
    )
  }
}
