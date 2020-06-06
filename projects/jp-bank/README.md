# JpBank

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

[demo](https://koichi-ezato.github.io/angular-libraries/#/jp-bank)

## install

```shell script
npm i jp-bank
```

## example
example.component.ts
```typescript
    this.jpBankService.getBankInfo(bankCode)
      .then(response => {
      })
      .catch(err => {
        this.err = err;
        console.log(err);
      });
```

```typescript
    this.jpBankService.getBankBranchInfo(bankCode, bankBranchCode)
      .then(response => {
      })
      .catch(err => {
        this.err = err;
        console.log(err);
      });
```

## reference
**inputs**
* bankCode: Japan bank code.
* bankBranchCode: Japan bank branch code.

**output**
* response: BankInfo model.

```typescript
export interface BankInfo {
  code: string;
  kana: string;
  name: string;
}
```
