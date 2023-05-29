import { Selector } from 'testcafe';

fixture`Prueba de inicio de sesión`
  .page`https://brandon2002.github.io/machinelearning/`;

test('Validación de usuario y contraseña', async (t) => {
  // Selector de elementos
  const userField = Selector('#user');
  const passwordField = Selector('#contrasena');
  const submitButton = Selector('#button');
  const errorMessage = Selector('.error-message');

  // Caso de prueba 1: Usuario incorrecto
  await t.typeText(userField, 'invaliduser');
  await t.typeText(passwordField, 'Password123');
  await t.click(submitButton);
  await t.expect(errorMessage.innerText).contains('El usuario debe ser una dirección de correo de Gmail válida.');

  // Caso de prueba 2: Contraseña incorrecta
  await t.typeText(userField, 'user@gmail.com');
  await t.typeText(passwordField, 'password');
  await t.click(submitButton);
  await t.expect(errorMessage.innerText).contains('La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.');

  // Caso de prueba 3: Usuario y contraseña correctos
  await t.typeText(userField, 'user@gmail.com');
  await t.typeText(passwordField, 'Password123');
  await t.click(submitButton);
  await t.expect(errorMessage.innerText).eql(''); // No debe haber mensaje de error
});
