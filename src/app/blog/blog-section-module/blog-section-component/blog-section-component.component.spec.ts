import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSectionComponentComponent } from './blog-section-component.component';

describe('BlogSectionComponentComponent', () => {
  let component: BlogSectionComponentComponent;
  let fixture: ComponentFixture<BlogSectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSectionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
