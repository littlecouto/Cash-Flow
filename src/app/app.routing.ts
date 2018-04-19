import { Routes, RouterModule, CanActivate } from '@angular/router'
import { ModuleWithProviders } from '@angular/core/src/metadata';

import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { IncomeComponent } from './cash/income/income.component';
import { SpentComponent } from './cash/spent/spent.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './dashboard/not-found/not-found.component';


export const APP_ROUTES: Routes = [
    {
        path: '', component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'conta', component: UserComponent,
        canActivate: [AuthGuard]
    },
    { path: 'entrar', component: LoginComponent },
    { path: 'sair', component: LoginComponent },
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'}
]


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
