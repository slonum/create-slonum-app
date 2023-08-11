import { InfoPage } from '../InfoPage';
import React from 'react';

const data = {
  title: 'Произошла ошибка',
  description: 'Перезагрузите страницу или вернитесь на главную.',
};

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <InfoPage {...data} />;
    }

    return this.props.children;
  }
}
