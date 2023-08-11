export type contentTypes =
  | 'name'
  | 'password'
  | 'passwordConfirm'
  | 'email'
  | 'loginOrEmail'
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
  | 'participantName'
  | 'complexity'
  | 'tags'
  | 'url'
  | 'url-repost'
  | 'avatar';

export type defaultValueTypes =
  | 'fullName'
  | 'password'
  | 'email'
  | 'city'
  | 'birthDate';

export interface birthDate {
  day: string | FormDataEntryValue;
  month: string | FormDataEntryValue;
  year: string | FormDataEntryValue;
}
