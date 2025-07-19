import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { StepperComponent } from './pages/stepper/stepper.component';
import { DashboardChartsComponent } from './charts/dashboard-charts/dashboard-charts.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'users',
                component: UserListComponent
            },
            {
                path: 'profile',
                component: UserProfileComponent
            },
            { path: 'users/form', component: UserFormComponent },
            { path: 'stepper', component: StepperComponent },
            { path: 'charts', component: DashboardChartsComponent },


        ]
    },

];
