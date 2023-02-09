import React from "react";
import jest from "jest";
import puppeteer from "puppeteer";

describe("show/hide an event details", () => {});

test("An event element is collapsed by default", async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  await page.waitForSelector(".event");

  const eventDetails = await page.$(".event .event__Details");
  expect(eventDetails).toBeNull();
  browser.close();
});

//accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https://www.googleapis.com/auth/calendar.readonly&response_type=code&client_id=833471851549-mb59heqgs4g7bo3f5f3ogrd1pot28ct6.apps.googleusercontent.com&redirect_uri=https://wentdavid.github.io/meet/