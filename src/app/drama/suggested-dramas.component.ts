import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle } from '@angular/platform-browser';
import { Drama } from '../dramas';

@Component({
  selector: 'app-suggested-dramas',
  template: `
    <div class="flex justify-start">
      <article class="ml-6" *ngFor="let d of dramas">
        <div class="h-48 flex-none w-36">
          <img src="{{d.image}}" alt="Official release poster for {{d.name}}" class="w-full h-full rounded" />
        </div>
        <h4 class="text-center text-slate-600">{{d.name}}</h4>
      </article>
    </div>
  `,
  styles: [
  ]
})
export class SuggestedDramasComponent {
  @Input() public dramas!: Drama[];
}
