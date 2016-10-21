import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { TopbarComponent } from './topbar.component'
import { BodyComponent } from './body.component'
import { ListComponent } from './list.component'
import { ListService } from './list.service';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BodyComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
