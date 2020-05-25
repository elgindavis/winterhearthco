// trigger an immediate page refresh when an update is found
let isRedundant = false;
export const onServiceWorkerUpdateReady = () => {
    console.log("isRedundant", isRedundant)
    if (!isRedundant)
        window.location.reload();
};

export const onServiceWorkerRedundant = () => {
    isRedundant = true;
}
