import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'home',
  pathMatch: 'full'
},{
  path: 'home',
  component: SongsListComponent
},
{
path:'view-playlist',
component: ViewPlaylistComponent
},{
  path:'playlists',
  component:PlaylistsComponent
},
{
  path: 'albums',
  component:AlbumsComponent
},{
  path: '**',
  component: PageNotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
