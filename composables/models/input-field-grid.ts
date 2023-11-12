import { InputField } from "./input-field";

export class InputFieldGrid extends InputField {
  flex: "full" | "half" = "half";
  constructor(params: Partial<InputFieldGrid>) {
    super(params);
    Object.assign(this, params);
  }
}
