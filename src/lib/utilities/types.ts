import { Instagram, Linkedin, Twitter } from '../assets/images';
import { SocialLink } from '.';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}

// TODO: fix this error
// eslint-disable-next-line consistent-return
export function iconsMap(type: SocialLink['type']): React.FunctionComponent {
  switch (type) {
    case 'twitter':
      return Twitter;
    case 'linkedin':
      return Linkedin;
    case 'instagram':
      return Instagram;
    default:
      assertUnreachable(type);
  }
}
