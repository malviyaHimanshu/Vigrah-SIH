import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CameraComponent } from './camera/camera.component';
import { AksarantaraComponent } from './aksarantara/aksarantara.component';
import { KosaComponent } from './kosa/kosa.component';
import { InscriptionDetailComponent } from './inscription-detail/inscription-detail.component';
import { AbhinanaComponent } from './abhinana/abhinana.component';
import { OcrOutputComponent } from './ocr-output/ocr-output.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "scan", component: CameraComponent},
  {path: "transliterate", component: AksarantaraComponent},
  {path: "abhinana", component: AbhinanaComponent},
  {path: "inscriptions", component: KosaComponent},
  {path: "inscriptionDetails", component: InscriptionDetailComponent},
  {path: "output", component: OcrOutputComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
