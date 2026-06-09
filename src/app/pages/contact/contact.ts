import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  private readonly FORM_SUBMIT_ENDPOINT = 'https://formsubmit.co/lafundacion@epluribusunvm.com';

  message = '';
  status: 'idle' | 'success' | 'error' | ''= '';

  async submit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      this.status = 'idle';
      const resp = await fetch(this.FORM_SUBMIT_ENDPOINT, {
        method: 'POST',
        body: formData,
        redirect: 'follow'
      });

      if (resp.ok) {
        this.status = 'success';
        this.message = 'Correo enviado con éxito.';
        form.reset();
      } else {
        this.status = 'error';
        this.message = 'Error al enviar el correo.';
        console.error('Form submit failed', resp.status, await resp.text());
      }
    } catch (err) {
      this.status = 'error';
      this.message = 'Error de red al enviar el correo.';
      console.error(err);
    }
  }
}
