import { isValidEmail } from "./String";

describe('String.ts', () => {
  describe(isValidEmail.name, () => {
    test(`${isValidEmail.name}('taro.legal@example.com') is valid`, () => {
      expect(isValidEmail('taro.legal@email.com')).toBeTruthy();
    });

    test(`${isValidEmail.name}('taro_legal@example.com') is valid`, () => {
      expect(isValidEmail('taro_legal@email.com')).toBeTruthy();
    });

    test(`${isValidEmail.name}('taro-legal@example.com') is valid`, () => {
      expect(isValidEmail('taro-legal@email.com')).toBeTruthy();
    });

    // cSpell:disable
    test(`${isValidEmail.name}('ｔａｒｏ．ｌｅｇａｌ＠ｌｅｇａｌｆｏｒｃｅ．ｃｏ．ｊｐ') is invalid`, () => {
      expect(isValidEmail('ｔａｒｏ．ｌｅｇａｌ＠ｌｅｇａｌｆｏｒｃｅ．ｃｏ．ｊｐ')).toBeFalsy();
    });
    // cSpell:enable

    test(`${isValidEmail.name}('taro.example.com') is invalid`, () => {
      expect(isValidEmail('taro.example.com')).toBeFalsy();
    });

    test(`${isValidEmail.name}('taro@example.') is invalid`, () => {
      expect(isValidEmail('taro@example.')).toBeFalsy();
    });

    test(`${isValidEmail.name}('') is invalid`, () => {
      expect(isValidEmail('')).toBeFalsy();
    });
  });
})
