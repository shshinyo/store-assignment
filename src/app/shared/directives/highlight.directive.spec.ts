import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({ template: ` <span appHighlight>Hello world</span> ` })
export class HighlightTestComponent {}

// To test a directive we need a dummy test component
describe('Directive: Highlight', () => {
  let component!: HighlightTestComponent,
    fixture!: ComponentFixture<HighlightTestComponent>,
    elementDebug!: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightDirective, HighlightTestComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightTestComponent);
    component = fixture.componentInstance;
    elementDebug = fixture.debugElement.query(By.css('span'));

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(new HighlightDirective()).toBeTruthy();
  });

  it('it should change background color to be bg-orange-100 on mouse over', () => {
    elementDebug.triggerEventHandler('mouseover', null);

    fixture.detectChanges();

    expect(elementDebug.nativeElement.className).toContain('bg-orange-100');
  });

  it('it should change background color to be bg-transparent on mouse out', () => {
    elementDebug.triggerEventHandler('mouseout', null);

    fixture.detectChanges();

    expect(elementDebug.nativeElement.className).toBe('bg-transparent');
  });
});
