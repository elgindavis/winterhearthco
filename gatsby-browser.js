// trigger an immediate page refresh when an update is found
let isRedundant = false;
export const onServiceWorkerUpdateReady = () => {
    // const answer = window.confirm(
    //   `This application has been updated. ` +
    //     `Reload to display the latest version?`
    // );
    // if (!isRedundant && answer === true) {
    if (!isRedundant) {
      window.location.reload();
    }
};

export const onServiceWorkerRedundant = () => {
    isRedundant = true;
}
