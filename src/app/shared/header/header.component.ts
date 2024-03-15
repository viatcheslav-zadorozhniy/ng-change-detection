import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Link } from '../../domain';
import { LinkComponent } from '../link';
import { OnclickButtonComponent } from '../onclick-button';
import { AsyncTaskButtonComponent } from '../async-task-button';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncTaskButtonComponent,
    LinkComponent,
    OnclickButtonComponent,
  ],
})
export class HeaderComponent {
  readonly links: Link[] = [
    { href: '/link1', text: 'Link 1' },
    { href: '/link2', text: 'Link 2' },
  ];
}
