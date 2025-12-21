document.addEventListener('DOMContentLoaded', function() {
    const infoButtons = document.querySelectorAll('.game-container__more-info-button'); 

    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeSvgButtons = document.querySelectorAll('.modal-more-info-content-close-svg');
    closeSvgButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-more-info');
            closeModal(modal);
        });
    });

    const closeButtons = document.querySelectorAll('.modal-more-info-content-close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-more-info');
            closeModal(modal);
        });
    });

    const modals = document.querySelectorAll('.modal-more-info');
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                closeModal(this);
            }
        });
    });

    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});