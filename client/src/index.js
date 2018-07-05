import renderDev from './index-dev';
import renderProd from './index-prod';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'development') {
  renderDev();

  if (module.hot) {
    module.hot.accept('./App', () => renderDev());
  }
} else if (process.env.NODE_ENV === 'production') {
  renderProd();
}

registerServiceWorker();
