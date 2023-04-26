import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Link } from '../../domain';

@Component({
  standalone: true,
  selector: 'app-link',
  templateUrl: './link.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
})
export class LinkComponent {
  @Input() link!: Link;
}
