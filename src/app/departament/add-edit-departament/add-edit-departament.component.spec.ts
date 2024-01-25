import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDepartamentComponent } from './add-edit-departament.component';

describe('AddEditDepartamentComponent', () => {
  let component: AddEditDepartamentComponent;
  let fixture: ComponentFixture<AddEditDepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditDepartamentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
