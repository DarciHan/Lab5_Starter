// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';



//isPhoneNumber
test('phone true 1', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('phone true 2', () => {
  expect(isPhoneNumber("111-222-3333")).toBe(true);
});

test('phone false 1', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test('phone false 2', () => {
  expect(isPhoneNumber("abc-def-ghij")).toBe(false);
});


//isEmail
test('email true 1', () => {
  expect(isEmail("test@example.com")).toBe(true);
});

test('email true 2', () => {
  expect(isEmail("hello@ucsd.edu")).toBe(true);
});

test('email false 1', () => {
  expect(isEmail("test.com")).toBe(false);
});

test('email false 2', () => {
  expect(isEmail("test@.com")).toBe(false);
});


//isStrongPassword
test('password true 1', () => {
  expect(isStrongPassword("Password1")).toBe(true);
});

test('password true 2', () => {
  expect(isStrongPassword("Hello123")).toBe(true);
});

test('password false 1', () => {
  expect(isStrongPassword("abc")).toBe(false);
});

test('password false 2', () => {
  expect(isStrongPassword("123456")).toBe(false);
});


//isDate
test('date true 1', () => {
  expect(isDate("05/01/2024")).toBe(true);
});

test('date true 2', () => {
  expect(isDate("01/01/2000")).toBe(true);
});

test('date false 1', () => {
  expect(isDate("2024-05-01")).toBe(false);
});

test('date false 2', () => {
  expect(isDate("not-a-date")).toBe(false);
});


//isHexColor
test('hex true 1', () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});

test('hex true 2', () => {
  expect(isHexColor("#000000")).toBe(true);
});

test('hex false 1', () => {
  expect(isHexColor("pink")).toBe(false);
});

test('hex false 2', () => {
  expect(isHexColor("#GGGGGG")).toBe(false);
});