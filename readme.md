# @romain-faust/use-unmount

## Installation

_With [NPM](https://www.npmjs.com/)_:

```bash
npm install @romain-faust/use-unmount
```

_With [PNPM](https://pnpm.io/)_:

```bash
pnpm add @romain-faust/use-unmount
```

_With [Yarn](https://classic.yarnpkg.com/)_:

```bash
yarn add @romain-faust/use-unmount
```

### Dependencies

-   [@romain-faust/use-singleton](https://www.npmjs.com/package/@romain-faust/use-singleton) (>=1.0.1)
-   [react](https://www.npmjs.com/package/react) (>=16.8.6)
-   [rxjs](https://www.npmjs.com/package/rxjs) (>=7.5.5)

## Usage

<!-- prettier-ignore -->
```tsx
import { useUnmount } from '@romain-faust/use-unmount'
import { map, mergeMap, takeUntil } from 'rxjs'

const CreateProductForm = () => {
    const handleSubmit = (product: Product) => {
        getUser()
            .pipe(
                map((user) => user.id),
                mergeMap((ownerId) => createProduct(product, ownerId)),
                takeUntil(unmount$),
            )
            .subscribe()
    }

    // ...
}
```

## License

[MIT](./license.md)
