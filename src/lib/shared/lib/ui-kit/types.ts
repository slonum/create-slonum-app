import { IUserInfoAvatarLink } from '@slonum/kit';

export type IProfileRole = 'PARENT' | 'CHILD' | 'USER';

export interface IUserProfile extends Partial<IUserInfoAvatarLink> {
  role?: IProfileRole;
}

export type IRegistrationSource =
  | 'main'
  | 'blog'
  | 'drawing-competition'
  | 'english-lang'
  | 'fraction'
  | 'lk'
  | 'olympiad'
  | 'vocabulary-words'
  | string;

export interface IValidFormData {
  name?: boolean;
  password?: boolean;
  email?: boolean;
  city?: boolean;
  birthday?: boolean;
  participantName?: boolean;
  isAgree?: boolean;
  isAgreeSub?: boolean;
}
export type contentTypesNew =
  | 'day'
  | 'month'
  | 'year'
  | 'name'
  | 'password'
  | 'passwordConfirm'
  | 'email'
  | 'city'
  | 'birthday'
  | 'url'
  | 'donate'
  | 'name-order'
  | 'phone'
  | 'text'
  | 'competition-title'
  | 'competition-description'
  | 'competition-vk'
  | 'competition-ok'
  | 'endingTime'
  | 'price'
  | 'priceWithRepost'
  | 'olymp-title'
  | 'olymp-description'
  | 'startTime'
  | 'volume'
  | 'slug'
  | 'title'
  | 'titleEng'
  | 'author'
  | 'authorEng'
  | 'annotation'
  | 'metaUrl'
  | ''
  | 'translate'
  | 'tags'
  | 'complexity'
  | 'participantName';
