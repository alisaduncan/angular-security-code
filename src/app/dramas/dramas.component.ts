import { Component } from '@angular/core';
import { DramaService } from '../drama.service';
import { Drama } from '../dramas';

@Component({
  selector: 'app-dramas',
  template: `
    <p class="text-center text-3xl mb-12 text-indigo-500">Transport yourself to another world</p>
    <div class="flex flex-wrap gap-4">
        <app-drama *ngFor="let d of dramas" [drama]="d"></app-drama>
    </div>
    <section class="w-10/12 mx-auto mt-24">
      <h4  class="text-center text-xl mt-12 mb-3 text-slate-400">Credits</h4>
      <p class="text-sm flex justify-center text-slate-500">All images are official promotional posters.</p>
    </section>
  `
})
export class DramasComponent {

  public dramas: Drama[];

  constructor(dramaService: DramaService) {
    this.dramas = dramaService.getDramas();
   }
}
