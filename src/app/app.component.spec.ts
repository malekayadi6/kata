import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {CurrencyModule} from './currency/currency.module';
import {LayoutModule} from './layout/layout.module';
import {routes} from './app-router';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

/*
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule,
        LayoutModule,
        CurrencyModule

      ],
      declarations: [
        AppComponent,

      ],
    }).compileComponents();
  }));




/*
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'currencyKata'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('currencyKata');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to currencyKata!');
  });

});
  */
describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        CoreModule,
        LayoutModule,
        CurrencyModule
      ],
     declarations: [
      AppComponent
    ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /currency', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/currency');

  }));


});
