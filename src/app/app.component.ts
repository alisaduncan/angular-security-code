import { Component } from '@angular/core';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col min-h-screen justify-center bg-slate-100">
      <header class="mt-6 w-10/12 mx-auto">
        <h1 class="text-center text-5xl text-blue-500">My Favorite K-Dramas</h1>
        <div class="border border-1 border-blue-200 mt-6 mb-3"></div>
        <nav class="mx-3">
          <ul class="flex justify-end text-slate-500">
            <li>
              <a routerLink="/dramas">HOME</a>
            </li>
            <li *ngIf="this.signinService.isLoggedIn">
              <a routerLink="/profile">PROFILE</a>
            </li>
            <li *ngIf="!this.signinService.isLoggedIn">
              <button (click)="login()">LOG IN</button>
            </li>
            <li *ngIf="this.signinService.isLoggedIn">
              <button (click)="logout()">LOG OUT</button>
            </li>
          </ul>
        </nav>
        <div class="border border-1 border-blue-200 mb-6 mt-3"></div>
      </header>
      <main class="my-12 mx-auto flex-grow">
        <router-outlet></router-outlet>
      </main>
      <footer class="flex justify-center mb-3">
        <p class="text-sm text-slate-800">
          This is a sample site showcasing Angular security mechanisms by
          <a href="https://alisaduncan.dev" class="underline text-blue-500 hover:text-orange-400">Alisa Duncan</a>. Use at your own risk.
        </p>
      </footer>
    </div>
  `,
  styles: [
  `
      nav li+li {
        margin-left: 1.5rem;
      }
  `
  ]
})
export class AppComponent {

  constructor(public signinService: SigninService) { }

  public login(): void {
    this.signinService.login();
  }

  public logout(): void {
    this.signinService.logout();
  }
}
