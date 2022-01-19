import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BstThreeComponent } from './bst-three.component';

describe('BstThreeComponent', () => {
  let component: BstThreeComponent;
  let fixture: ComponentFixture<BstThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BstThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BstThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
