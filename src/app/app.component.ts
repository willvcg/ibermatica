import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicantsEmployeesService } from './services/applicants-employees.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ibermatica-prueba';
}
