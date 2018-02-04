import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map'; // Adds a map to an observable

@NgModule({
    imports: [
        BrowserModule, FotoModule, HttpModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}