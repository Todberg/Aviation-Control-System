import { Component } from '@angular/core';
import { Directionality, Direction } from '@angular/cdk/bidi';
import { startWith, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private destroy$ = new Subject<void>();

  /** Whether the aside is collapsed. */
  collapsed = false;
  /** The direction. */
  direction: Direction = 'ltr';

  constructor(
    private readonly directionality: Directionality
  ) {}
  
  ngOnInit(): void {    
    this.directionality.change
      .pipe(
        startWith(this.directionality.value),
        takeUntil(this.destroy$)
      )
      .subscribe((direction) => this.direction = direction)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
