import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { EditorComponent } from './editor/editor.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'profile/:username', component: ProfileComponent },
  {
    path: 'editor', children: [
      { path: 'new', component: EditorComponent },
      { path: '**', redirectTo: 'new' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
