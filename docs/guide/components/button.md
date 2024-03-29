# Button

## Component Preview
<script setup lang="ts">
import { TwButton } from "vue3-tailwind"
</script>

<div class="flex gap-2">
  <TwButton>
  Primary
  </TwButton>
  <TwButton ripple variant="secondary">
  Secondary
  </TwButton>
  <TwButton ripple variant="secondary" icon="airplay">
  With Icon
  </TwButton>
</div>

## Usage

```vue{2}
<script setup lang="ts">
import { TwButton } from "vue3-tailwind"
</script>
```

And on your template use the button

```vue{2}
<template>
    <TwButton>Hi</TwButton>
</template>
```

---

## Props

This is set of properties that can be pass to TwButton component

## Variant

Variant is set of predefined css classes use for button:

**_Usage:_**

```vue
<TwButton variant="secondary">Hi</TwButton>
```

Here's the list of available variants:

- primary
- secondary
- danger
- success
- light
- warning
- info
- outline-primary
- outline-secondary
- outline-danger
- outline-success
- outline-light
- outline-warning
- outline-info
- none

**Default** Variant is `primary`

::: details

```js
const COLORS: Record<ButtonVariant, string> = {
  ["primary"]: "bg-gray-800 text-white",
  ["secondary"]: "bg-gray-200 text-gray-800",
  ["danger"]: "bg-red-800 text-white",
  ["success"]: "bg-green-800 text-white",
  ["light"]: "bg-white text-gray-800 dark:bg-gray-800 dark:text-white",
  ["warning"]: "bg-yellow-800 text-white",
  ["info"]: "bg-sky-800 text-white",
  ["outline-primary"]:
    "border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-gray-100",
  ["outline-secondary"]: "border-2 border-gray-200 text-gray-800",
  ["outline-danger"]:
    "border-2 border-red-800 text-gray-800 hover:bg-red-800 hover:text-gray-100",
  ["outline-success"]:
    "border-2 border-green-800 text-gray-800 hover:bg-green-800 hover:text-gray-100",
  ["outline-light"]: "border-2 border-white text-gray-800",
  ["outline-warning"]:
    "border-2 border-yellow-800 text-gray-800 hover:bg-yellow-800 hover:text-gray-100",
  ["outline-info"]:
    "border-2 border-sky-800 text-gray-800 hover:bg-sky-800 hover:text-gray-100",
  ["none"]: "",
};
```

:::

## Icon

By default `Feather Icon` is used as the main icon on this, it can also be replaceable via slot. Here's how you can use the component

**_Usage:_**

```html
<TwButton icon="airplay">Button With Icon</TwButton>
```

We can also parse div to icon slot if we dont want to use the default Feather Icon

```html
<TwButton icon="airplay">
  Button With Icon
  <template #icon>
    <!-- You Custom Icon goes here -->
    <!-- 
            Notes: This will replace the feather icons 
            even if we pass it as props 
        -->
  </template>
</TwButton>
```

Can find available icon's listed here: https://feathericons.com/

## Text Position

Available Options for Text Position:

- left
- right
- center

**_Usage:_**

```html
<TwButton text-position="right">Button With Icon</TwButton>
```

Default Text Position `left`

::: details

```js
const TEXT_POSITIONS: Record<ButtonTextPosition, string> = {
  ["left"]: "text-left",
  ["right"]: "text-right",
  ["center"]: "text-center",
};
```

:::

## Icon Position

Available Options for Icon Position:

- left
- right

**_Usage:_**

```vue
<TwButton icon-position="right">Button With Icon</TwButton>
```

Default value for Icon Position props `left`

::: details

```js
const ICON_POSITIONS: Record<ButtonIconPosition, string> = {
  ["left"]: "float-left",
  ["right"]: "float-right",
};
```

:::

## Disabled

Available Options for Disabled:

- true
- false

**_Usage:_**

```vue
<TwButton disabled>Button With Icon</TwButton>
```

Default value for Disabled props `false`

## Ripple

Uses ripple directive to show ripple effect on this component
Available Options for Ripple:

- true
- false

**_Usage:_**

```vue
<TwButton ripple>Button With Icon</TwButton>
```

## Loading

When loading is on, if we have icon, it will replace it with spinner icon and disable the button. It accept boolean as value
Available Options for Loading:

- true
- false

**_Usage:_**

```vue
<TwButton loading>Button With Icon</TwButton>
```

Default value for Loading props `false`
