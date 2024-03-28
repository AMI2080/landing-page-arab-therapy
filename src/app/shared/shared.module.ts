import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const sharedComponents = [PageComponent, HeaderComponent, FooterComponent];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ar',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    // components
    ...sharedComponents,
  ],
  exports: [
    TranslateModule,
    // components
    ...sharedComponents,
  ],
  providers: [provideHttpClient(withFetch())],
})
export class SharedModule {}
