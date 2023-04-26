import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../domain';
import { getUserHash } from '../utils';

/**
 * Use pipes for referentially transparent expressions instead of component methods.
 * It helps to avoid unnecessary recalculations during the change detection.
 * See https://www.youtube.com/watch?v=f8sA-i6gkGQ&t=781s for more details.
 */
@Pipe({
  standalone: true,
  name: 'userHash',
  // pure: false,
})
export class UserHashPipe implements PipeTransform {
  transform(user: User): string {
    console.count('UserHashPipe.transform');
    return getUserHash(user);
  }
}
