import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { FooComponent } from './foo/foo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - Kalibu Poc" },
  { path: 'foo', component: FooComponent, title: "Foo - Kalibu Poc" },
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
