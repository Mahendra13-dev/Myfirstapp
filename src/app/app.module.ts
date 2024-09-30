import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import { PracticeComponent } from './practice/practice.component';
import { totalPriceComponent } from './totalprice/totalprice.component';
import { CalculatepriceComponent } from './calculateprice/calculateprice.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { SwitchComponent } from './switch/switch.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    FriendsComponent,
    PracticeComponent,
    totalPriceComponent,
    CalculatepriceComponent,
    DirectivePracticeComponent,
    EventBindingComponent,
    SwitchComponent,
    TemplateDrivenFormComponent,
    TwoWayDataBindingComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    ReactiveFormComponent,
    ReactiveForm2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
