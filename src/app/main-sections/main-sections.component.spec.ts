import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionsComponent } from './main-sections.component';

describe('MainSectionsComponent', () => {
  let component: MainSectionsComponent;
  let fixture: ComponentFixture<MainSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
