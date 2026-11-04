import slugify from "slugify";
import { makeRandomString } from "./make-randm-string";

export const makeSlugFromText = (text: string) => {
  const slug = slugify(text, {
    lower: true,
    strict: true,
    trim: true,
  });
  return `${slug}-${makeRandomString()}`; //a string aleatoria é para nao haver repetidos na base de dados
};
