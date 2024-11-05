import { string } from "zod";

import {
  atLeastOneLowercaseLetterRegExp,
  atLeastOneNumberRegExp,
  atLeastOneSpecialCharacterRegExp,
  atLeastOneUppercaseLetterRegExp,
  hasSpacesRegExp,
} from "../constants/reg-exps";

export const passwordSchema = () => {
  return string()
    .regex(atLeastOneSpecialCharacterRegExp, "At least one special character required")
    .regex(atLeastOneLowercaseLetterRegExp, "At least one lowercase letter required")
    .regex(atLeastOneUppercaseLetterRegExp, "At least one uppercase letter required")
    .regex(atLeastOneNumberRegExp, "At least one number required")
    .regex(hasSpacesRegExp, "Password must not contain any spaces")
    .min(8, "Password must be at least 8 characters")
    .max(40, "Password must be maximum of 40 characters");
};
