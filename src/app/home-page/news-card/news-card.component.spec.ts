import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardComponent } from './news-card.component';

describe('NewsCardComponent', () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    component.news = {
      coverImageUrl:
        'https://benwajdi.com/wp-content/uploads/2021/11/691px-Bill_Styron_in_his_West_Chop_writing_room_on_Marthas_Vineyard_-_August_1989.jpg',
      description: '750 points by shankarro 4 days ago  | 367 comments',
      subtitle: 'benwajdi.com',
      title: 'Internet addiction and the habit of book reading',
      url: '/article/https:%2F%2Fbenwajdi.com%2F2021%2F12%2F18%2Fis-internet-addiction-eradicating-the-habit-of-reading%2F',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
