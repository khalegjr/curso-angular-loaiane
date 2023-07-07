import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamelCasePipe } from './camel-case.pipe';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayImpurroPipe } from './filtro-array-impurro.pipe';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpurroPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR',
    // },
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: SettingsService) =>
        settingsService.getLocale(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
