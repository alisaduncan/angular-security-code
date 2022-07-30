import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  template: `
    <p class="text-xl text-slate-500 mb-3">Your thoughts?</p>
    <input 
      type="text" 
      [(ngModel)]="comment"
      placeholder="Add a comment"
      class="mb-6 focus:ring-2 focus:ring-teal-300 focus:outline-none w-1/2 text-sm text-slate-900 placeholder-slate-400 rounded p-2 ring-1 ring-slate-400 bg-zinc-50"
    />
  `,
  styles: [
  ]
})
export class AddCommentComponent implements OnInit {

  public comment: string|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
