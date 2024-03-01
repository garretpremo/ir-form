import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { InputsComponent } from './inputs/inputs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, FormComponent, InputsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ir-form';
  jurisdiction = signal('djawopdjodpdj');
}
