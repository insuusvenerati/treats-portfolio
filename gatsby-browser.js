import './src/styles/index.sass';
import 'react-awesome-button/dist/styles.css';

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` + `Reload to display the latest version?`,
  );
  if (answer === true) {
    window.location.reload();
  }
};
