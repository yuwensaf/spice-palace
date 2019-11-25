$(document).ready(function () {

    // 刪除訂單的 modal
    $('#removeModal').on('shown.bs.modal', function (event) {

        var target = $(event.relatedTarget);
        var title = $(target).data('title');
        var quantity = $(target).data('quantity');
        var modal = $(this);

        modal.find('.modal-title').text('刪除 ' + title + quantity);
    });

    // 互動元件：愛心
    $('.interactive .fa-heart').on('click', function () {
        $(this).toggleClass('interactive_active');     
    });

    // 表單驗證
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

    
});




