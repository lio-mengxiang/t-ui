import { type ComponentType, Component, isValidElement } from 'react';

const errorBoundary = (Element: ComponentType, errorCallback: (error: Error) => void) => {
  return class ErrorBoundary extends Component {
    componentDidCatch(err: Error) {
      errorCallback(err);
    }

    render() {
      return typeof Element === 'function' ? <Element /> : isValidElement(Element) ? Element : null;
    }
  };
};

export default errorBoundary;
