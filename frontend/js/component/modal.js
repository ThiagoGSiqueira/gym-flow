export function setupModal(modalElementId, openButtonId, closeButtonId) {
    const modalElement = document.getElementById(modalElementId);
    const openButton = document.getElementById(openButtonId);
    const closeButton = document.getElementById(closeButtonId);

    openButton.addEventListener('click', () => {
        modalElement.showModal();
    });

    closeButton.addEventListener('click', () => {
        modalElement.close();
    });

    return modalElement;
}