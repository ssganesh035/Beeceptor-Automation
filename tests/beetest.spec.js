const { test, expect } = require("@playwright/test");

test("Click on Add A Mock Rule in Beeceptor", async ({ page }) => {
  await page.goto("https://app.beeceptor.com/console/beetest");
  await page.waitForLoadState("domcontentloaded");

  const createMockApiSelector =
    '//h4[contains(@class, "task-title") and text()="Create a Mock API"]';
  await page.waitForSelector(createMockApiSelector);

  await page.click(createMockApiSelector);

  const addMockRuleButtonSelector =
    '//div[@id="details-1"]//button[contains(@class, "action-button")]';
  await page.waitForSelector(addMockRuleButtonSelector);

  await page.click(addMockRuleButtonSelector);

  const addNextButton =
    '//div[@class="driver-popover-footer"]//button[contains(@class, "driver-popover-next-btn")]';

  await page.waitForSelector(addNextButton);
  await page.click(addNextButton);

  await page.locator("body").click();

  const addRuleTypes =
    '//div[@class="btn-group"]//button[contains(@class, "btn btn-default dropdown-toggle")]';

  await page.waitForSelector(addRuleTypes);
  await page.click(addRuleTypes);

  const addProxy = '//*[@id="rulesList"]/div[2]/div/div[1]/div/ul/li[2]/a';

  await page.waitForSelector(addProxy);
  await page.click(addProxy);


  const dropdownSelector = '//*[@id="proxyEdit.behavior"]';
  const waitOptionSelector = '//*[@id="proxyEdit.behavior"]/option[@value="wait"]';

  await page.waitForSelector(dropdownSelector);
  await page.click(dropdownSelector);
  await page.waitForSelector(waitOptionSelector);
  await page.click(waitOptionSelector);



});
