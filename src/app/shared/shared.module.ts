import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';

const sharedComponents = [PageComponent, HeaderComponent, FooterComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [
    // components
    ...sharedComponents,
  ],
  exports: [
    // components
    ...sharedComponents,
  ],
})
export class SharedModule {}
