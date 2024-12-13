import { Component, computed, inject, input, Input } from '@angular/core';
import { ApplicantsEmployeesService } from '../../services/applicants-employees.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
 userId = input<string>('');
 private readonly applicantsEmployeesService = inject(ApplicantsEmployeesService);

  protected applicantEmployee$ = computed(() => this.applicantsEmployeesService.getAppEmpByNifOrPassport(this.userId()));
  selectedTabIndex = 0;

  tabs = [
    { title: 'Tab 1', content: '<p>Contenido de la pestaña 1</p>' },
    { title: 'Tab 2', content: '<p>Contenido de la pestaña 2</p>' },
    { title: 'Tab 3', content: '<p>Contenido de la pestaña 3</p>' }
  ];

  selectTab(index: number) {
    this.selectedTabIndex = index;
  }
}
