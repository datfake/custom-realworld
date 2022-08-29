import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleShareComponent } from './article-share.component';

describe('ArticleComponent', () => {
  let component: ArticleShareComponent;
  let fixture: ComponentFixture<ArticleShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
