import { Component, Input, OnInit } from '@angular/core';

/** Represents the name of the icon. */
export type IconName = '';

/** Represents the icon size. */
export type IconSize = 's' | 'm' | 'l';

@Component({
  selector: 'oxygen-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class OxygenIconComponent implements OnInit {
  /** The name of the icon. */
  @Input()
  public name?: IconName;

  /** The size of the icon. */
  @Input()
  public size?: IconSize = 'm';

  ngOnInit(): void {}
}
