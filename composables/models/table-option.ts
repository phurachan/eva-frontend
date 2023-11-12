export class TableOption {
  field?: string;
  label?: string;
  sort?: boolean = false;
  headerAlign: 'text-left' | 'text-center' | 'text-right' = 'text-center';
  dataAlign: 'text-left' | 'text-center' | 'text-right' = 'text-center';
  width?: String;

  constructor(params: Partial<TableOption>) {
    Object.assign(this, params);
  }
}
