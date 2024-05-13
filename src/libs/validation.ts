import { z } from "zod";

export const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.too_small: {
      if (issue.type === "string" && issue.minimum === 1) {
        return { message: "必須" };
      }
      return { message: `最低${issue.minimum}文字入力してください。` };
    }
    case z.ZodIssueCode.too_big: {
      return { message: `${issue.maximum}文字以上は入力できません。` };
    }
    case z.ZodIssueCode.invalid_type: {
      if (issue.received === "null" || issue.received === "undefined") {
        return { message: "必須" };
      }
    }
    default: {
      return { message: ctx.defaultError };
    }
  }
};
