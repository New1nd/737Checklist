document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.querySelector('.custom-checkbox input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
        var blockItem = this.closest('.block-item__content__item');
        if (this.checked) {
            blockItem.classList.add('checked');
        } else {
            blockItem.classList.remove('checked');
        }
    });
});