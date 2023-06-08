import { Component } from '@angular/core';
import { MailService } from '@sendgrid/mail';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {

  constructor(private mailService: MailService,) {
    this.mailService.setApiKey('TU_API_KEY');
  }
 // nombre: string, correo: string, mensaje: string    ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}

  enviarCorreo() {
    const msg = {
      to: 'goldenelegancecontact@gmail.com',
      from: 'goldenelegancecontact@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: `,
    };

    this.mailService.send(msg)
      .then(() => {
        console.log('Correo enviado con éxito');
      })
      .catch((error) => {
        console.error('Error al enviar el correo', error);
      });
  }
}
