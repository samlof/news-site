import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { of } from 'rxjs';
import { ArticlePageQueryDocument } from 'src/app/generated/graphql';
import { ArticlePageComponent } from './article-page.component';

class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.params = of({ url: 'www.testurl.com' });
  }
}

describe('ArticlePageComponent', () => {
  let component: ArticlePageComponent;
  let fixture: ComponentFixture<ArticlePageComponent>;
  let controller: ApolloTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlePageComponent],
      imports: [ApolloTestingModule],
      providers: [{ provide: ActivatedRoute, useClass: MockActivatedRoute }],
    }).compileComponents();
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const op = controller.expectOne(ArticlePageQueryDocument);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
