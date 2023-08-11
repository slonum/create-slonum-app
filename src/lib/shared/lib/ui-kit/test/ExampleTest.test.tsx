import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { ExampleTest } from './ExampleTest';
import { setup, setupMemo } from './tests';

afterEach(cleanup);

/*
  npm run test-w - запускает тест, который у тебя отображается в изменениях гита
   (мне проще с этой командой)
  npm test - запускает все тесты
  npm run coverage - статистика по всем тестам
  npm run coverage-o - статистика по тесту который у тебя отображается в изменениях гита
*/

describe('ExampleTest', () => {
  //Стандартный тест рендерится ли компонент
  it('should render successfully', () => {
    const { container } = render(<ExampleTest />); //рендерим компонент стандартным методом
    expect(container).toBeTruthy(); // просто проверяем что контейнер существует (отрендерен)
  });

  /*
    Пример создания снапшота, в принципе не обязателен в тестах.
    Снапшоты можно делать несколько раз при изменениях компонента,
    в примере перерендерил компонент, чтобы показать изменения снапшота
  */
  it('should create snapshot', () => {
    const { container, rerender } = render(<ExampleTest />);
    expect(container).toMatchSnapshot(); //ExampleTest should create snapshot 1
    rerender(<ExampleTest isNewSnap />);
    expect(container).toMatchSnapshot(); //ExampleTest should create snapshot 2
  });

  /*
    Поиск элементов основными способами
    https://testing-library.com/docs/queries/about
  */

  it('should search buttons', () => {
    const { container, getByRole } = render(<ExampleTest />);

    /*
      Мы можем найти кнопку buttonTtitle методом getByRole:
        - вызвать его из глобального screen.getByRole:
          const button = screen.getByRole('button', {
            name: /buttonTtitle/i,
          });
        - импортировать из метода рендера:
    */

    const buttonTtitle = getByRole('button', {
      name: /buttonTtitle/i,
    });

    /*
      Мы не можем найти кнопку buttonNoTtitle методом getByRole,
      т.к текст кнопки находится в элементе span
      Поэтому используем стандартные js-dom методы
      Например по классу:
    */
    const buttonNoTtitle = container.querySelector('.test__buttonNoTtitle');
    expect(buttonNoTtitle).toBeInTheDocument(); //один из способов проверить, что элемент существует
  });

  it('should click buttons', async () => {
    const onClick = jest.fn(); // стандартная моковая функция
    const onClickWithValues = jest.fn();
    /*
      setup - расширенный метод рендеринга
      возвращает класс user, для взаимодеяствия https://testing-library.com/docs/ecosystem-user-event
    */

    const { container, getByRole, user } = setup(
      <ExampleTest onClick={onClick} onClickWithValues={onClickWithValues} />,
    );

    /*
     Ищем кнопку -> нажимаем -> проверяем была ли вызвана функция
    */

    const buttonTtitle = getByRole('button', {
      name: /buttonTtitle/i,
    });

    await user.click(buttonTtitle);
    expect(onClick).toBeCalled(); //https://jestjs.io/ru/docs/expect#tohavebeencalled

    /*
     Ищем кнопку -> нажимаем -> проверяем была ли вызвана функция 
      и какие значения были переданы
    */
    const buttonNoTtitle = container.querySelector('.test__buttonNoTtitle');
    expect(buttonNoTtitle).toBeInTheDocument();

    await user.click(buttonNoTtitle);
    expect(onClickWithValues).toBeCalledWith('test-value', { value: 'test' });

    /*
      если в функции передается другая функция, проверяем первый первый парметр
      игнорируем парамтр с функцией:

      await waitFor(() =>
        expect(handler).toHaveBeenCalledWith('first prop', expect.anything()),
      );
    */
  });

  /*
    проверяем работу next/router
  */
  it('should routing', async () => {
    /*
      используем другой метод рендеринга - setupMemo
      возвращает класс mockRouter, аналог стандартного
    */

    const { getByText, user, mockRouter } = setupMemo(<ExampleTest />);

    /*
     Ищем ссылку -> нажимаем -> проверяем на какой мы странице
    */
    expect(mockRouter.asPath).not.toEqual('/test'); //сейчас мы находимся не на /test
    const link = getByText(/link to page test/i);
    //getByRole('link', { name: 'link to page test' })) могли и так найти
    await user.click(link);
    expect(mockRouter.asPath).toEqual('/test'); //сейчас мы находимся на /test
  });

  /*
    проверяем ссылки на другие(внешние) страницы
  */
  it('should links value', async () => {
    render(<ExampleTest />);

    /*
      Ищем ссылку -> проверяем значение ссылки
      Тут я объеденил всё в одну строку, можно разделять
    */

    expect(
      screen.getByRole('link', { name: 'link to page example.com' }),
    ).toHaveAttribute('href', 'https://example.com/');
  });
});
