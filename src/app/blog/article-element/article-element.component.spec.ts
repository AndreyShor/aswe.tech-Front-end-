import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleElementComponent } from './article-element.component';

describe('ArticleElementComponent', () => {
  let component: ArticleElementComponent;
  let fixture: ComponentFixture<ArticleElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
