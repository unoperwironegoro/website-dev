
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLinksComponent } from './personal-links.component';

describe('PersonalLinksComponent', () => {
  let component: PersonalLinksComponent;
  let fixture: ComponentFixture<PersonalLinksComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
