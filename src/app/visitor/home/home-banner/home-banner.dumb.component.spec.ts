import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeBannerDumbComponent } from './home-banner.dumb.component';

describe('HomeBannerDumbComponent', () => {
  let component: HomeBannerDumbComponent;
  let fixture: ComponentFixture<HomeBannerDumbComponent>;
  let debugElement: DebugElement;

  let title: DebugElement;
  let description: DebugElement;
  let button: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerDumbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBannerDumbComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.componentRef.setInput('title', 'expected title');
    fixture.componentRef.setInput('description', 'expected description');
    fixture.componentRef.setInput('button', 'expected button');
    fixture.detectChanges();
  });

  beforeEach(() => {
    title = debugElement.query(By.css('[data-testid="title"]'));
    description = debugElement.query(By.css('[data-testid="description"]'));
    button = debugElement.query(By.css('[data-testid="button"]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    expect(title.nativeElement.textContent).toContain('expected title');
  });

  it('should display description', () => {
    expect(description.nativeElement.textContent).toContain(
      'expected description',
    );
  });

  it('should display button', () => {
    expect(button.nativeElement.textContent).toContain('expected button');
  });

  it('should trigger event on button click', () => {
    const spy = jest.spyOn(component.clicked, 'emit');
    button.nativeElement.click();
    expect(spy).toHaveBeenCalled();
  });
});
