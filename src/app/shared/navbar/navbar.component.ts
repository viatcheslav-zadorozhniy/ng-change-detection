import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Link } from '../../domain';
import { LinkComponent } from '../link';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LinkComponent,
  ],
})
export class NavbarComponent {
  readonly links: Link[] = [
    { href: '/link3', text: 'Link 3' },
    { href: '/link4', text: 'Link 4' },
  ];
}
