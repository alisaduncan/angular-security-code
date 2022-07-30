import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DramaService } from '../drama.service';
import { Drama } from '../dramas';

@Component({
  selector: 'app-dramadetail',
  template: `
    <h2 class="mb-12 text-center text-5xl text-indigo-600">
      {{drama.name}}
    </h2>
    <section class="flex justify-center">
      <img class="w-80 rounded" src="{{drama.image}}"/>
      <div class="ml-8 w-2/5 text-slate-600">
        <p class="text-lg">{{drama.description}}</p>
        <p class="my-6">Released in {{drama.release}}</p>
        <p>
          Starring 
          <span *ngFor="let actor of drama.cast; last as last">
            {{actor}}<span *ngIf="!last">,</span>
          </span>
        </p>
        <div class="my-6 flex">
          <p class="mr-3 px-1.5 py-1 ring-1 ring-purple-300 bg-purple-100 rounded text-slate-700 text-sm" *ngFor="let t of drama.tags">
            {{t}}
          </p>
        </div>
      </div>
    </section>
    <div class="w-10/12 my-12 flex justify-evenly">
      <section>
        <h3 class="text-center text-3xl text-indigo-600">Official Trailer</h3>
        <div class="mt-3">
          <app-video [videoId]="drama.videoId"></app-video>
        </div>
      </section>
      <section>
        <h3 class="text-center text-xl text-indigo-400 mb-9">If you enjoyed {{drama.name}}, consider watching</h3>
        <app-suggested-dramas [dramas]="recommendedDramas"></app-suggested-dramas>
      </section>
    </div>
    <section class="w-10/12 mx-auto">
      <h3 class="text-center text-3xl mt-12 mb-9 text-indigo-600">What people say about {{drama.name}}</h3>
      <app-add-comment></app-add-comment>
      <div class="border border-slate-300 my-6"></div>

      <app-comments [comments]="drama.comments"></app-comments>
    </section>
    <section class="w-10/12 mx-auto">
      <h4  class="text-center text-xl mt-12 mb-3 text-slate-500">Credits</h4>
      <p class="text-sm flex justify-center text-slate-600">All images are promotional posters and all videos are official trailer releases.</p>
    </section>
  `,
  styles: [
  ]
})
export class DramaDetailComponent implements OnInit {
  public drama!: Drama;
  public recommendedDramas!: Drama[];

  constructor(private activatedRoute: ActivatedRoute, private dramaService: DramaService) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.drama = this.dramaService.getDrama(id) as Drama;

    this.recommendedDramas = this.dramaService.getDramas().filter(d => d.id !== this.drama.id);
  }

}
