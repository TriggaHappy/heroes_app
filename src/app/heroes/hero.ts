import { createRxjsEsmResolutionPlugin } from '@angular-devkit/build-angular/src/tools/esbuild/rxjs-esm-resolution-plugin';

export interface Hero {
  id: number;
  name: string;
}


export interface ReceiptItem {
  price: number;
  name?: string;
  amount: number;
}

export interface Receipt {
  sum: number;
  receiptItems: Array<ReceiptItem>
}

export const whatever: Receipt = {
  sum: 1,
  receiptItems: [
    {
      price: 2,
      name: `Apfel`,
      amount: 12
    }
  ]
}
