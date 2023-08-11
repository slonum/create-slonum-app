import { InfoPage } from '@ui/blocks/InfoPage';

const data = {
  title: '404 Страница не найдена',
  description: 'Такой страницы не существует или она была удалена.',
};

export default function FourOhFour() {
  return <InfoPage {...data} />;
}
