import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider';
import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import mockRouter from 'next-router-mock';
import { NotificationConnector } from '@ui/blocks/notification';
import { ModalConnector } from '@ui/blocks/modal';

export const setup = (jsx: ReactElement, isMemory = false) => {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
};

export const setupMemo = (jsx: ReactElement) => {
  return {
    user: userEvent.setup(),
    mockRouter,
    ...render(jsx, { wrapper: MemoryRouterProvider }),
  };
};

export const setupMemoRedux = (jsx: ReactElement, store: any) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <MemoryRouterProvider>
        <Provider store={store}>{children}</Provider>
      </MemoryRouterProvider>
    );
  }

  return {
    store,
    user: userEvent.setup(),
    mockRouter,
    ...render(jsx, { wrapper: Wrapper }),
  };
};

export const renderWithProviders = (
  jsx: ReactElement,
  store: any,
  options: {
    includeNotification?: boolean;
    includeModal?: boolean;
  } = {
    includeNotification: false,
    includeModal: false,
  },
) => {
  const { includeModal, includeNotification } = options;

  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        {children}
        {includeNotification && <div id="notification"></div>}
        {includeNotification && <NotificationConnector />}
        {includeModal && <div id="modal"></div>}
        {includeModal && <ModalConnector />}
      </Provider>
    );
  }

  return {
    store,
    mockRouter,
    user: userEvent.setup(),
    ...render(jsx, { wrapper: Wrapper }),
  };
};
