import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
         { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
             { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
             { path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
          { path: 'form-controls', loadChildren: () => import('./form-controls/formcontrol.module').then(m => m.FormcontrolModule) }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
