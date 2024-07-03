## Run following commands:

`npm i && npm run build`

Generated web component file is available in ./elements/my-element.js or `http://localhost:4200/assets/my-element.js`.

It can be used in LuigiContainer like:

```html
<LuigiContainer viewURL="http://localhost:4200/assets/my-element.js" webComponent='{"selfRegistered":"true"}'/>
```

or in Luigi core:
```javascript
{
    pathSegment: 'reactwc',
    label: 'reactwc',
    viewUrl: 'http://localhost:4200/assets/my-element.js',
    webcomponent: {
        selfRegistered: true,
    }
}
```
