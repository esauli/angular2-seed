import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { appRouting } from './app.routes';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './_layout/header.component';
import { MainNavComponent } from './_layout/mainnav.component';
import { DispatcherModule } from './_common/dispatcher/dispatcher.module';
import { FooterComponent } from './_layout/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    DispatcherModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) =>
        new TranslateStaticLoader(http, 'assets/locales', `.${process.env.TRANSLATION_HASH}.json`),
      deps: [Http]
    }),
    appRouting
  ],
  declarations: [AppComponent, HeaderComponent, MainNavComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
