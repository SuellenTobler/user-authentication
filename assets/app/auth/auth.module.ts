import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";
import { LogoutComponent } from "./logout.component";
import { authRouting } from "./auth.routing";

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ]
})
export class AuthModule {

}