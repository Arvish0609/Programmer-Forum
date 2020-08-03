import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { CatchDetailsComponent } from './blog/catch-details/catch-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    BlogComponent,
    BlogDetailsComponent,
    CatchDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path :'signup', component:SignupComponent},
      {path :'login', component :LoginComponent},
      {path :'blogs', component :BlogComponent},
      {path :'', redirectTo: 'signup', pathMatch : 'full' },
      {path : '**', redirectTo : 'signup', pathMatch :'full'}
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
