import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateEnrollmentPage } from './create-enrollment.page';

describe('CreateEnrollmentPage', () => {
  let component: CreateEnrollmentPage;
  let fixture: ComponentFixture<CreateEnrollmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEnrollmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEnrollmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
