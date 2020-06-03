# JpPost

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## install

```shell script
npm i jp-post
```

## example
example.component.ts
```typescript
    this.jpPostService.get(postalCode)
      .then(response => {
        if (response.code === 200) {
        } else {
        }
      })
      .catch(err => {
        this.err = err;
        console.log(err);
      });
```

## reference
**inputs**
* postalCode: Japan zip code.

**output**
* response: ZipSearch model.

```typescript
export interface ZipSearch {
  code: number;
  data: {
    pref: string,
    address: string,
    city: string,
    town: string,
    fullAddress: string,
  };
  message?: string;
}
```

If success then return code is ```200``` and set value data,
else error return code other ```200``` and set value message.
