import { Selector } from "testcafe";

fixture (`Debugging TestCafe Tests`)
    .page `https://automationpratice.com.br/`;

  test('Login com dados vazios', async t => {
    await t
      //.debug()
      .click(Selector('#top_header a').withText('Login'))
      .click(Selector('#btnLogin'))
      .expect(Selector('#login_area span').withText('E-mail inválido.').visible).ok();
      });

  test('Login com senha vazia', async t => {
    await t
      //.debug()
      .click(Selector('#top_header a').withText('Login'))
      .typeText(Selector('#user'), 'kelfreitas@gmail.com')
      .click(Selector('#btnLogin'))
      .expect(Selector('#login_area span').withText('Senha inválida.').visible).ok();
  });

    test('Login com email vazio', async t => {
    await t
      //.debug()
      .click(Selector('#top_header a').withText('Login'))
      .typeText(Selector('#password'), 'Teste123')
      .click(Selector('#btnLogin'))
      .expect(Selector('#login_area span').withText('E-mail inválido.').visible).ok();
  });

    test('Login com senha inválida', async t => {
    await t
      //.debug()
      .click(Selector('#top_header a').withText('Login'))
      .typeText(Selector('#user'), 'kelfreitas@gmail.com')
      .typeText(Selector('#password'), 'teste')
      .click(Selector('#btnLogin'));
  });

    test('Login com sucesso', async t => {
    await t
      //.debug()
      .click(Selector('#top_header a').withText('Login'))
      .typeText(Selector('#user'), 'kelfreitas@gmail.com')
      .typeText(Selector('#password'), 'Teste123')
      .click(Selector('#btnLogin'))
      .expect(Selector('button').withText('OK').visible).ok();
  });
