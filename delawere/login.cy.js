describe('Тесты', function () {
    it('Проверка с длинным кодом', function () {
    cy.visit('https://testqastudio.me/');
    cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
    cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
    cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
    cy.get('.home > span').click();
    cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.wait(5500);
    cy.get('.checkout').click();
    cy.get('#billing_first_name').type('aaaaa');
    cy.get('#billing_last_name').type('bbbb');
    cy.get('#billing_address_1').type('Москва');
    cy.get('#billing_city').type('Москва');
    cy.get('#billing_state').type('Москва');
    cy.get('#billing_postcode').type('111222');
    cy.get('#billing_phone').type('89992022646');
    cy.get('#billing_email').type('abramova_nastya@inbox.ru');
    cy.get('#place_order').click();
    cy.contains('Ваш заказ принят. Благодарим вас.');
    
})


it('Позитивный тест на верный логин и пароль', function () {
    cy.visit(' https://login.qa.studio/'); 
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type( 'iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.contains('Форма логина');
})

})

it('Негативный тест на верный логин и  неверный пароль', function () {
cy.visit(' https://login.qa.studio/'); 
cy.get('#mail').type('german@dolnikov.ru');
cy.get('#pass').type( 'iLoveqastudio2');
cy.get('#loginButton').click();
cy.get('#exitMessageButton > .exitIcon')
cy.contains('Такого логина или пароля нет');

})

it('Тест на проверку логики восстановления пароля', function () {
cy.visit(' https://login.qa.studio/'); 
cy.get('#forgotEmailButton').click();
cy.get('#mailForgot').type('german@dolnikov.ru');
cy.get('#restoreEmailButton').click();
cy.get('#exitMessageButton > .exitIcon');
cy.contains('Успешно отправили пароль на e-mail');

})

it('Негативный кейс авторизации', function () {
cy.visit(' https://login.qa.studio/'); 
cy.get('#mail').type('germann@dolnikov.ru');
cy.get('#pass').type('iLoveqastudio1');
cy.get('#loginButton').click();
cy.get('#exitMessageButton > .exitIcon');
cy.contains('Такого логина или пароля нет');


})

it('Негативный кейс валидации', function () {
cy.visit(' https://login.qa.studio/'); 
cy.get('#mail').type('germanndolnikov.ru');
cy.get('#pass').type('iLoveqastudio1');
cy.get('#loginButton').click();
cy.get('#exitMessageButton > .exitIcon');
cy.contains('Нужно исправить проблему валидации');


})

it('проверка на привидение к строчным буквам в логине', function () {
cy.visit(' https://login.qa.studio/'); 
cy.get('#mail').type('GerMan@Dolnikov.ru');
cy.get('#pass').type('iLoveqastudio1');
cy.get('#loginButton').click();
cy.get('#exitMessageButton > .exitIcon');
cy.contains('Такого логина или пароля нет');

})

        

