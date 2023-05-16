fixture('Registro de estudiantes')
    .page('https://brandon2002.github.io/machinelearning/');

test('Submit a form', async t => {
    await t
        // automatically dismiss dialog boxes
        .setNativeDialogHandler(() => true)

        //Fill the name
        .typeText("#user", "Brandon Tapia")
        .typeText("#contrasena", "adeleadkins")
        .click("#button")
    })