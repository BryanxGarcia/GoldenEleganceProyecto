import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {

  claseDiv:string= 'container';

  login ={
    // 'overlay-panel overlay-left overlay-panel overlay-right':true
  };

  fijar(){
    this.claseDiv='container  right-panel-active';
  }

  eliminar(){
    this.claseDiv='container';
  }


}