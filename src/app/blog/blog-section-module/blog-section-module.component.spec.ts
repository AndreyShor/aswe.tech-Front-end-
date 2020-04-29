import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSectionModuleComponent } from './blog-section-module.component';

describe('BlogSectionModuleComponent', () => {
  let component: BlogSectionModuleComponent;
  let fixture: ComponentFixture<BlogSectionModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSectionModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSectionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
