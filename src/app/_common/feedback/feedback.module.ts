import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackService } from './feedback.service';
import { ToasterComponent } from './toaster.component';
import { TranslateModule } from 'ng2-translate';
import { AlertModule } from 'ng2-bootstrap/alert';

@NgModule({
  imports: [CommonModule, TranslateModule, AlertModule.forRoot()],
  declarations: [ToasterComponent],
  exports: [ToasterComponent]
})
export class FeedbackModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FeedbackModule,
      providers: [FeedbackService]
    };
  }
}
