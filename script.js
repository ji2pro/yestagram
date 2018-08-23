$(document).ready(function() {
    $('.ui .item').on('click', function() {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });


InlineEditor
    .create(document.querySelector('#editor'), {
        language: 'ko'
    })
    .catch(error => {
        console.error(error);
    });
});

// Login
$(document).ready(function() {
    $('.ui.form').form({
        fields: {
            email: {
                identifier: 'email',
                rules: [{
                        type: 'empty',
                        prompt: '이메일을 입력하세요.'
                    },
                    {
                        type: 'email',
                        prompt: '올바른 이메일 형식을 입력하세요.'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [{
                        type: 'empty',
                        prompt: '비밀번호를 입력하세요.'
                    },
                    {
                        type: 'length[6]',
                        prompt: '비밀번호는 적어도 6글자 이상이어야 합니다.'
                    }
                ]
            }
        }
    });
});