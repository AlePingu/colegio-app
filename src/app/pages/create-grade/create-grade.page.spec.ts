import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateGradePage } from './create-grade.page';

describe('CreateGradePage', () => {
  let component: CreateGradePage;
  let fixture: ComponentFixture<CreateGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
