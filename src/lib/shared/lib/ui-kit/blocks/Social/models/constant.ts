// TODO: добыть ссылку для дзена
export const shareLinkList = (olympUrl: string) => [
  { socialName: 'vk', href: `https://vk.com/share.php?url=${olympUrl}` },
  { socialName: 'ok', href: `https://connect.ok.ru/offer?url=${olympUrl}` },
  {
    socialName: 'telegram',
    href: `https://t.me/share/url?url=${encodeURIComponent(olympUrl)}`,
  },
  //{ socialName: 'dzen', href: 'https://dzen.ru/slonum' },
];
