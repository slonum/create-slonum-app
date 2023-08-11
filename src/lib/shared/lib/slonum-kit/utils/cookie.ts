export function setCookie(name: string, value: object, options = {}) {
  const isServer = !process.env.NEXT_PUBLIC_LOCAL;
  options = {
    path: '/',
    domain: isServer ? 'slonum.ru' : 'localhost',
    'max-age': 86400,
    secure: true,
    samesite: 'strict',
    ...options,
  };

  let updatedCookie =
    encodeURIComponent(name) + '=' + encodeURIComponent(JSON.stringify(value));

  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey;
    /* @ts-ignore */
    const optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue;
    }
  }
  if (!document) return;
  document.cookie = updatedCookie;
}

export function getRefreshToken() {
  if (typeof window === 'undefined') return null;

  const tokens = getCookie('_nt');
  if (tokens) return tokens.f;
  else return localStorage.getItem('refreshToken');
}

export function deleteCookie(name: string) {
  /* @ts-ignore */
  setCookie(name, '', {
    'max-age': -1,
  });
}
export function getAccesToken() {
  if (typeof window === 'undefined') return null;

  const tokens = getCookie('_nt');
  if (tokens) return tokens.s;
  else return localStorage.getItem('accessToken');
}
export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)',
    ),
  );
  return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}
