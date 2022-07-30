import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DramaDetailComponent } from './drama/drama-detail.component';
import { DramasComponent } from './dramas/dramas.component';
import { LoggedInGuard } from './logged-in.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'dramas', component: DramasComponent },
  { path: 'dramas/:id', component: DramaDetailComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard] },
  { path: '', component: DramasComponent },
  { path: '**', redirectTo: '/dramas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
