import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDepartamentComponent } from './show-departament.component';

describe('ShowDepartamentComponent', () => {
  let component: ShowDepartamentComponent;
  let fixture: ComponentFixture<ShowDepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDepartamentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
