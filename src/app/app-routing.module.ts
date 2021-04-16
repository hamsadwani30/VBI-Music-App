import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';

const routes: Routes = [{
  path: 'home',
  component: SongsListComponent
},
{
path:'view-playlist',
component: ViewPlaylistComponent
},
{
  path:'',
  redirectTo:'home',
  pathMatch: 'full'
},{
  path:'playlists',
  component:PlaylistsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
