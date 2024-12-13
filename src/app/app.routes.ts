import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/user-list/user-list.component').then(m => m.UserListComponent) },
    { path: 'user-detail/:userId', loadComponent: () => import('./pages/user-detail/user-detail.component').then(m => m.UserDetailComponent) },
    { path: 'user-create', loadComponent: () => import('./pages/user-form/user-form.component').then(m => m.UserFormComponent) },
    { path: 'user-edit/:userId', loadComponent: () => import('./pages/user-form/user-form.component').then(m => m.UserFormComponent) },
];
