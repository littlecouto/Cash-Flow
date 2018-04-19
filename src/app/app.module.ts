import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule, NgIf } from '@angular/common';

import { routing } from "./app.routing";
import { AuthGuard } from "./auth.guard";

import { LoadingComponent } from './layout/loading/loading.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

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

import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase  } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyD4QCjMt6T_qjL2S22pLcQJEtJL8sF8djI",
  authDomain: "littlecouto-cashflow.firebaseapp.com",
  databaseURL: "https://littlecouto-cashflow.firebaseio.com",
  projectId: "littlecouto-cashflow",
  storageBucket: "littlecouto-cashflow.appspot.com",
  messagingSenderId: "558432636228"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ServicesComponent,
    ProductsComponent,
    IncomeComponent,
    SpentComponent,
    AdminComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [AuthGuard, LoginService, AngularFireModule, AngularFirestore, AngularFireDatabase, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
