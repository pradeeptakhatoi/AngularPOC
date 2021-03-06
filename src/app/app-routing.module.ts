import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { FaqListComponent } from './faq/faq-list/faq-list.component';

import { FrontendlayoutComponent } from './frontend-layout.component';


import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: FrontendlayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'faq', component: FaqListComponent },
      { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard], },
      {
        path: 'hero',
        loadChildren: () => import('./hero/hero.module').then((m) => m.HeroModule),
      },
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule), canLoad: [AdminGuard],
      },
      {
        path: 'miscellaneous',
        loadChildren: () => import('./miscellaneous/miscellaneous.module').then((m) => m.MiscellaneousModule),
      },
    ],
  },
  { path: 'admin', loadChildren: () => import('../admin/admin.module').then((m) => m.AdminModule), canLoad: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
