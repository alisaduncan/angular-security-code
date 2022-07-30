import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DramaComponent } from './dramas/drama.component';
import { DramasComponent } from './dramas/dramas.component';
import { DramaDetailComponent } from './drama/drama-detail.component';
import { CommentsComponent } from './drama/comments.component';
import { VideoComponent } from './drama/video.component';
import { SuggestedDramasComponent } from './drama/suggested-dramas.component';
import { ProfileComponent } from './profile/profile.component';
import { AddCommentComponent } from './drama/add-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    DramaComponent,
    DramasComponent,
    DramaDetailComponent,
    CommentsComponent,
    VideoComponent,
    SuggestedDramasComponent,
    ProfileComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
