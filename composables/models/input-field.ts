export class InputField {
  key: string = "";
  label: string = "";
  value: any = "";
  disabled: boolean = false;
  readonly: boolean = false;
  type: "text" | "datepicker" | "radio" | 'checkbox' | 'dropdown' | 'file' | 'textarea' = "text";
  placeholder: string = "";
  required?: boolean = false;
  children: OptionData[] = [];
  width: "full" | "half" | string = "full";
  suffixIcon?: string;
  prefixIcon?: string;

  /// type=file
  canEditDescFile: boolean = false;

  constructor(params: Partial<InputField>) {
    Object.assign(this, params);
    this.children = params.children?.map(e => new OptionData(e)) ?? [];
  }
}

export class OptionData {
  label?: string;
  key?: string;
  value?: any;

  constructor(params: Partial<InputField>) {
    Object.assign(this, params);
  }
}
