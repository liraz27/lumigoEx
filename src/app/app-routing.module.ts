import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatContainerComponent } from './chat-container/chat-container.component';

const routes: Routes = [
  { path: 'chat', component: ChatContainerComponent },
  { path: '', redirectTo: '/chat', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
