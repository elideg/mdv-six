import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  { path: 'projects', component: ProjectComponent },
  { path: 'login', component: LoginComponent },
  { path: '404', component: WildcardComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
