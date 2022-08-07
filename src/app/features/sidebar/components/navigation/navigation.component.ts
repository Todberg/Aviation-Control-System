import { Component, OnInit } from '@angular/core';

export type NavigationLink = {
  readonly name: string;
  readonly path: string;
  readonly icon: string;
  readonly disabled: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public readonly navigationLinks: NavigationLink[] = [
    { name: 'Overview', path: 'overview', icon: '', disabled: false },
    { name: 'Wind', path: 'wind', icon: '', disabled: false },
    { name: 'Waves', path: 'waves', icon: '', disabled: false },
    { name: 'Weather', path: 'weather', icon: '', disabled: false },
    { name: 'CCTV (Coming later)', path: 'cctv', icon: '', disabled: true },
    { name: 'Lightning (Coming later)', path: 'lightning', icon: '', disabled: true }
  ]

  ngOnInit(): void {}
}
