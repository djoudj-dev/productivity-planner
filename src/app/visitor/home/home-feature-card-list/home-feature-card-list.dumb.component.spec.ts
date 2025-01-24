import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeFeatureCardListDumbComponent } from './home-feature-card-list.dumb.component';

describe('HomeFeatureCardListDumbComponent', () => {
  let component: HomeFeatureCardListDumbComponent;
  let fixture: ComponentFixture<HomeFeatureCardListDumbComponent>;
  let debugElement: DebugElement;
  let firstCard: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFeatureCardListDumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFeatureCardListDumbComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fixture.componentRef.setInput('featureCardList', [
      {
        name: 'Plannifier vos tâches',
        description: 'Visibilité sur les 7 prochains jours',
        icon: 'bi-calendar-heart-fill',
      },
    ]);
    fixture.detectChanges();
  });

  beforeEach(() => {
    firstCard = debugElement.query(By.css('.card:first-of-type'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display name in first card', () => {
    const title = firstCard.query(By.css('.card-title'));
    expect(title.nativeElement.textContent.trim()).toBe(
      'Plannifier vos tâches',
    );
  });

  it('should display calendar icon in first card', () => {
    const icon = firstCard.query(By.css('.bi-calendar-heart-fill'));
    expect(icon).toBeTruthy();
    expect(icon.nativeElement.classList.contains('text-primary')).toBeTruthy();
  });

  it('should display planning description in first card', () => {
    const description = firstCard.query(By.css('.card-text'));
    expect(description.nativeElement.textContent.trim()).toBe(
      'Visibilité sur les 7 prochains jours',
    );
  });
});
