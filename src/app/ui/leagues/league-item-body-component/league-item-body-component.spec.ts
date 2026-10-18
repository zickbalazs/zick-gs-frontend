import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeagueItemBodyComponent } from './league-item-body-component';

describe('LeagueItemBodyComponent', () => {
  let component: LeagueItemBodyComponent;
  let fixture: ComponentFixture<LeagueItemBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueItemBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueItemBodyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
