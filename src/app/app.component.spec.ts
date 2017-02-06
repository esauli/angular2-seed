import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { TranslateService } from 'ng2-translate';
import { Observable } from 'rxjs/Observable';
import { MockedTranslatePipe } from './_mocks/translate.mock.spec';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class MockedTranslateService {
  getResponse = Observable.of('test');

  setDefaultLang(): void {}
  use() {}
  get(): Observable<string> { return this.getResponse; }
}

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, MockedTranslatePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
          { provide: TranslateService, useClass: MockedTranslateService },
          provideRoutes([])
      ]
    });
  });

  it('should set two languages', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.languages).toEqual(['en', 'de']);
  });

});
