import { Selector } from "testcafe";

fixture (`Debugging TestCafe Tests`)
    .page `https://automationpratice.com.br/`;

  test('Debugging Example', async t => {
    const element = Selector('#elementId');
    await t
      .hover(element)
      .debug();
  });

