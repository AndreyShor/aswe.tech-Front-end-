import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryElementComponent } from './category-element.component';

describe('CategoryElementComponent', () => {
  let component: CategoryElementComponent;
  let fixture: ComponentFixture<CategoryElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
