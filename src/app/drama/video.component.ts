import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  template: `
    <iframe *ngIf="videoId"
      [src]="trustedVideoLink"
      width="560" height="315"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  `,
  styles: [
  ]
})
export class VideoComponent implements OnInit {
  @Input() public videoId:string|undefined;
  public saferVideoLink!: string;
  public trustedVideoLink!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.saferVideoLink = `https://www.youtube.com/embed/${this.videoId}`;
    this.trustedVideoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.saferVideoLink);
  }
}
