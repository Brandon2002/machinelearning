import { Selector } from 'testcafe';

fixture `Machine Learning - Usability Test`
    .page `https://brandon2002.github.io/machinelearning/`;

test('Usability Test', async t => {
    const usernameInput = Selector('#user');
    const passwordInput = Selector('#contrasena');
    const loginButton = Selector('#button');

    await t
        .expect(usernameInput.exists).ok('Username input field should exist')
        .expect(passwordInput.exists).ok('Password input field should exist')
        .expect(loginButton.exists).ok('Login button should exist')
        .expect(usernameInput.visible).ok('Username input field should be visible')
        .expect(passwordInput.visible).ok('Password input field should be visible')
        .expect(loginButton.visible).ok('Login button should be visible')
        .expect(usernameInput.hasAttribute('placeholder', 'Usuario')).ok('Username input field should have the correct placeholder')
        .expect(passwordInput.hasAttribute('placeholder', 'Contraseña')).ok('Password input field should have the correct placeholder')
        .expect(loginButton.value).eql('Iniciar sesión', 'Login button should have the correct text');
});