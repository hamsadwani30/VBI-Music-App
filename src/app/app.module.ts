import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SongsListComponent } from './songs-list/songs-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule, MatProgressSpinnerModule } from '@angular/material';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SongComponent } from './song/song.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlbumsComponent } from './albums/albums.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    HeaderComponent,
    FilterPipe,
    SongComponent,
    PlaylistsComponent,
    ViewPlaylistComponent,
    AlbumsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatProgressSpinnerModule,
    Ng2SearchPipeModule,
    ModalModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
