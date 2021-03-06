import { NgbModal, NgbModule, NgbDateParserFormatter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { DateTimeUtils } from './config/utils/date-time-utils';
import { NgbDateCustomParserFormatter } from './config/utils/dateformat';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppMaterialModule } from './config/app-material/app-material.module';
import { DynamicComponentsService } from './dynamic-components.service';
import { SharedDataComponentService } from './header/shared-data-component.service';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    HeaderComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    NgbModule.forRoot()
  ],

  providers: [
    {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader},
    AuthService,DynamicComponentsService,SharedDataComponentService,
	{ provide: MAT_DATE_LOCALE, useValue: 'es' },
	{ provide: MAT_DATE_FORMATS, useValue: DateTimeUtils.MAT_CUSTOM_DATE_FORMATS },
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter},
    AuthGuard,NgbModal],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
})
export class AppModule { }
