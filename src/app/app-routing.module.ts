import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CameraComponent } from './camera/camera.component';
import { AksarantaraComponent } from './aksarantara/aksarantara.component';
import { KosaComponent } from './kosa/kosa.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "scan", component: CameraComponent},
  {path: "transliterate", component: AksarantaraComponent},
  {path: "inscriptions", component: KosaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
