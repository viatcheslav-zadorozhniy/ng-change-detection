import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { User } from '../../domain';
import { UserHashPipe } from '../../pipes';
import { getUserHash } from '../../utils';

@Component({
  standalone: true,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    UserHashPipe,
  ],
})
export class UserComponent {
  @Input() user!: User;

  getUserHash(user: User): string {
    /**
     * Note: additional calls in the development mode required to detect `ExpressionChangedAfterItHasBeenCheckedError`.
     * https://angular.io/errors/NG0100
     */
    console.count('UserComponent.getUserHash');
    return getUserHash(user);
  }
}
