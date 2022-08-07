import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[oxygen-link]',
})
export class OxygenLinkDirective implements OnInit {
  private _disabled: boolean = false; 

  /** The base link class. */
  @HostBinding("class.--link")
  baseClass = true;

  /** The tab index. */
  @HostBinding("attr.tabindex")
  tabindex?: number | null;

  /** Whether the link is disabled. */
  @Input()
  @HostBinding("attr.aria-disabled")
  @HostBinding("class.--link--disabled")
  get disabled(): boolean { return this._disabled; }
  set disabled(disabled: boolean) {
		this._disabled = disabled;
		this.tabindex = this.disabled ? -1 : null;
	}
  
  ngOnInit(): void {}
}
