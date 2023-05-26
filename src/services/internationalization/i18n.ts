import { I18n } from "i18n-js";

import sa from "./translations/sa.json";
import en from "./translations/en.json";
import hi from "./translations/hi.json";
import mr from "./translations/mr.json";

const i18n = new I18n({
  sa,
  en,
  hi,
  mr,
});

i18n.locale = "en";

export default i18n;
