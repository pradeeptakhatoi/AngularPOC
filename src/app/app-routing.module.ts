import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard, AdminGuard } from './_helpers';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent, canActivate: [AuthGuard] },
  { path: 'hero', loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule) },
  { path: 'post', loadChildren: () => import('./post/post.module').then(m => m.PostModule), canLoad: [AdminGuard] },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canLoad: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
