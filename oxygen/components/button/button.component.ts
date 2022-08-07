import { Component, Input, OnInit } from '@angular/core';

/** Represents a button variant. */
type ButtonVariant = 'primary' | 'secondary' | 'tetriary';

@Component({
  selector: 'oxygen-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class OxygenButtonComponent implements OnInit {
  /** The variant. */
  @Input()
  variant: ButtonVariant = 'primary';

  ngOnInit(): void {}
}
