import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-comments',
  template: `
    <!--<h3 class="text-xl font-medium text-teal-600">Others thought</h3>
    <ul class="text-slate-600">
      <li class="border border-teal-400 rounded my-3 p-3 bg-zinc-50" *ngFor="let c of dangerousComments">
        <p [innerHTML]="c"></p>
      </li>
    </ul> -->

    <h3 class="text-2xl font-medium text-sky-500">Interpolated comments</h3>
    <ul class="text-slate-600">
      <li class="border border-sky-400 rounded my-3 p-3 bg-zinc-50" *ngFor="let comment of comments">
        <p>{{comment}}</p>
      </li>
    </ul>

    <div class="border border-slate-300 mt-9 mb-6"></div>

    <h3 class="text-2xl font-medium text-violet-500">Bound comments</h3>
    <ul class="text-slate-600">
      <li class="border border-violet-400 rounded my-3 p-3 bg-zinc-50" *ngFor="let comment of comments">
        <p [innerHTML]="comment"></p>
      </li>
    </ul>

    <!-- <div class="border border-slate-300 mt-9 mb-6"></div> -->

    <!-- <h3 class="text-2xl font-medium text-red-500">Yikes! Super dangerous comments</h3>
    <ul class="mt-3">
      <li class="border border-red-400 rounded my-3 p-3 bg-zinc-50" *ngFor="let dangerousComment of dangerousComments">
        <p [innerHTML]="dangerousComment"></p>
      </li>
    </ul> -->
  `,
  styles: [
  ]
})
export class CommentsComponent implements OnInit {
  @Input() public comments: string[] = [];
  public dangerousComments: SafeHtml[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  public ngOnInit(): void {
    this.dangerousComments = this.comments.map(c => this.sanitizer.bypassSecurityTrustHtml(c));
  }
}
