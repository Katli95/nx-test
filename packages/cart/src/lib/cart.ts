// True Positive (Correctly Allows)
import { utilities } from '@here/utilities';

// False Positive (Incorrectly Allows)
import { privatePrivate } from '@here/utilities/src/private/private';

// True Negative (Correctly disallows)
// import { privatePrivate } from '../../../utilities/src/private/private';

export function cart(): string {
  const a = privatePrivate();
  console.log(a);

  const b = utilities();
  console.log(b);

  return 'as';
}
