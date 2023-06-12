import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mensajeria } from 'src/app/models/mensajeria.interface';
import { MensajeriaService } from 'src/app/services/mensajeria.service';
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})

export class ContactanosComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private mens: MensajeriaService, private route: Router) { }

  kt_form: FormGroup = this.formBuilder.group({
    Nombre: ['', Validators.required],
    Correo: ['', [Validators.required, Validators.email]],
    Numero: ['', Validators.required],
    Mensaje: ['', Validators.required]
  });

  mensaje: Mensajeria = {
    Para: "",
    Asunto: "",
    Contenido: ""
  }
  ngOnInit() {

  }

  onSubmit() {
    if (this.kt_form.invalid) {
      return;
    }
    this.mensaje.Para= (this.kt_form.controls['Correo'].value);
    this.mensaje.Contenido=("Nombre del contacto:" +  this.kt_form.controls['Nombre'].value  + "\n Numero de telefono: " + this.kt_form.controls['Numero'].value + "\n Mensaje del contacto: " +this.kt_form.controls['Mensaje'].value );

    this.mens.enviarcontacto(this.mensaje)
      .subscribe({
        next: (res) =>{
          this.kt_form.reset();
          this.route.routeReuseStrategy.shouldReuseRoute = () => false;           
         },
        error:(err)=>{
          alert(err?.error.message)
        }
      })


  }
}
