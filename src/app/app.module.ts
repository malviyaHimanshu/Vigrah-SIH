import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CameraComponent } from './camera/camera.component';
import { AksarantaraComponent } from './aksarantara/aksarantara.component';
import { KosaComponent } from './kosa/kosa.component';
import { InscriptionDetailComponent } from './inscription-detail/inscription-detail.component';
import { AbhinanaComponent } from './abhinana/abhinana.component';
import { OcrOutputComponent } from './ocr-output/ocr-output.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CameraComponent,
    AksarantaraComponent,
    KosaComponent,
    InscriptionDetailComponent,
    AbhinanaComponent,
    OcrOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
