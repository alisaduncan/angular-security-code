import { Component, Input } from '@angular/core';
import { Drama } from '../dramas';

@Component({
  selector: 'app-drama',
  template: `
    <div class="flex h-72 bg-zinc-50" *ngIf="drama">
      <div class="flex-none w-56 relative">
        <img src="{{drama.image}}" alt="Official release poster for {{drama.name}}" class="absolute inset-0 w-full h-full object-cover rounded-l-lg" />
      </div>
      <div class="p-4 border-y border-r border-slate-400 rounded-r-lg w-80 flex flex-col">
        <h2 class="text-3xl text-indigo-600">
            {{drama.name}}
        </h2>
        <p class="my-3 text-sm text-slate-600 flex-grow">
            {{drama.description}}
        </p>
        <div class="flex">
          <p class="mr-3 px-1.5 py-1 ring-1 ring-purple-300 bg-purple-100 rounded text-slate-600 text-sm" *ngFor="let t of drama.tags">
            {{t}}
          </p>
        </div>
        <div class="mt-4 flex justify-end align-bottom">
          <a class="px-3 py-1.5 bg-sky-500 ring-sky-600 text-white rounded" routerLink="/dramas/{{drama.id}}">READ MORE</a>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class DramaComponent {
  @Input() public drama!: Drama;
}
