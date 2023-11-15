document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');

    checkboxes.forEach(function(checkbox){
        checkbox.addEventListener('change', function() {
            var blockItem = this.closest('.block-item__content__item');
            if (this.checked) {
                blockItem.classList.add('checked');
            } else {
                blockItem.classList.remove('checked');
            }
        });
    });

    const checklist = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');

    checklist.forEach(function(checkbox) {
        checkbox.addEventListener('change', function(event) {
            const itemId = event.target.dataset.id;
            const isChecked = event.target.checked;
            localStorage.setItem(itemId, isChecked);
        });
    });

    // Загрузка состояний чекбоксов из local storage при загрузке страницы
    function loadChecklistState() {
        var checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');

        checkboxes.forEach(function(checkbox) {
            var item = checkbox.closest('.block-item__content__item');
            const itemId = checkbox.dataset.id;
            const isChecked = localStorage.getItem(itemId) === 'true';
            checkbox.checked = isChecked;

            if (isChecked) {
                item.classList.add('checked');
            } else {
                item.classList.remove('checked');
            }
        });
    }

    document.getElementById('clearLocalStorageButton').addEventListener('click', function() {
        localStorage.clear();
        alert('Checklist is clear');
    });

    loadChecklistState();
});