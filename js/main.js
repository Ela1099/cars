


document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.obratnuj-zvonok'); // Выбираем все формы с классом obratnuj-zvonok

    // Добавляем обработчик события submit к каждой форме
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            formSend(e);
        });
    });

    async function formSend(e) {
        e.preventDefault();
        const form = e.target; // Получаем текущую форму
        const formData = new FormData(form);

        let error = formValidate(form);

        if (error === 0) {
            form.classList.add('_sending');

            try {
                let response = await fetch('sendmail.php', {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } catch (error) {
                console.error('Ошибка отправки формы:', error);
                alert('Ошибка отправки формы. Попробуйте позже.');
                form.classList.remove('_sending');
            }
        } else {
            alert('Заполните обязательные поля');
        }
    }

    // Функции валидации (без изменений)
    function formValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll('._req'); // Валидация только для текущей формы

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_nam')) {
                if (nameTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.value === '') { //Проверяем все остальные поля кроме _nam
                formAddError(input);
                error++;
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function nameTest(input) {
        return !/^[А-Я][а-яё]* [А-Я][а-яё]* [А-Я][а-яё]*$/.test(input.value);
    }

    function telTest(input) {
        return !/^\+7(\d{3})-\d{3}-\d{2}-\d{2}$/.test(input.value);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const telInputs = document.querySelectorAll('.obratnuj-zvonok #tel, .obratnuj-zvonok #tel1'); // Выбираем все поля ввода телефона
    telInputs.forEach(selector => {
        let im = new Inputmask("+7(999)-999-99-99");
        im.mask(selector);
    });
});