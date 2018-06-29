import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KarmaTestComponent } from './karma-test.component';

describe('KarmaTestComponent', () => {
  let component: KarmaTestComponent;
  let fixture: ComponentFixture<KarmaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarmaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KarmaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`shold have a title 'app'`, async(() => {
    const fixture = TestBed.createComponent(KarmaTestComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('karma');
  }));
});
