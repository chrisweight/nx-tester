import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooViewComponent } from './foo-view.component';

describe('FooViewComponent', () => {
  let component: FooViewComponent;
  let fixture: ComponentFixture<FooViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
