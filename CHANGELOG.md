## v5.0

- [breaking] `fetch` prop renamed to `fetchUrl`. `fetch` prop is now the callback called on fetched data.
- [breaking] Method `focus()` is renamed to `focusElement()`. `focus` prop is now the callback called when input is focused. (Appears to not be documented anyway?)
- [breaking] `createoption` event is renamed to `createOption`
- [breaking] `createEventDispatcher` is no longer used. Callback methods are expected to the following props instead: `invalidValue, change, createoption, createFail, enterKey, focus, blur, fetch, fetchError`



## v4.0:

- [breaking] changed signature of `registerSvelecte`
- [breaking] `registerSvelecte` is now available from `svelecte` itself, not from `svelecte/component`

- fix default placeholder to use global settings
