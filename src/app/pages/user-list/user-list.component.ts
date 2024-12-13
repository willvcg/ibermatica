import { Component, computed, inject, signal } from '@angular/core';
import { ApplicantsEmployeesService } from '../../services/applicants-employees.service';
import { AsyncPipe } from '@angular/common';
import { ApplicantsEmployees } from '../../model/applicants-employees.model';
import { ActivatedRoute, Router } from '@angular/router';

export type TypeApplicantsEmployees = 'demandante' | 'empleado' | '';

@Component({
  selector: 'app-user-list',
  imports: [AsyncPipe,],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly applicantsEmployeesService = inject(ApplicantsEmployeesService);
  private filter = signal<TypeApplicantsEmployees>('');
  protected applicantsEmployees$ = computed(()=> {
    const filter = this.filter();
    if(filter){
      return this.applicantsEmployeesService.getAppEmpByFilter(filter);
    }else{
      return this.applicantsEmployeesService.getApplicantsEmployees()
    }
  });

  protected onView(appEmp: ApplicantsEmployees):void{
    this.router.navigate(['user-detail', appEmp.personalData.nifOrPassport], {
      relativeTo: this.route,
    });
  }

  protected onEdit(appEmp: ApplicantsEmployees):void{
    this.router.navigate(['user-edit', appEmp.personalData.nifOrPassport], {
      relativeTo: this.route,
    });

  }

  protected onDelete(appEmp: ApplicantsEmployees):void{
    console.log("User selected");
  }

  protected onCreateUser():void{
    this.router.navigate(['user-create'], {
      relativeTo: this.route,
    });
  }

  protected onSelectionChange(event: Event):void{
    const target = event.target as HTMLSelectElement;
    this.filter.set(target.value as TypeApplicantsEmployees);
  }
}
