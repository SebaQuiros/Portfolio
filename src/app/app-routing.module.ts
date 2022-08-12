import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainSectionsComponent } from './main-sections/main-sections.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainSectionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
