# Dropdown Menu

## Component Preview

<script setup lang="ts">
</script>

<div class="flex gap-2">
    <TwDropdownMenu align="left">
        <template #trigger>
            <TwButton variant="light"> Dropdown left align </TwButton>
        </template>
        <template #content>
            <div 
                class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
            >
                <div class="flex gap-2 items-center">
                    <div class="">Select 1</div>
                </div>
            </div>
            <div class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
            >
                <div class="flex gap-2 items-center">
                    <div class="">Select 2</div>
                </div>
            </div>
        </template>
    </TwDropdownMenu>
    <TwDropdownMenu align="right">
        <template #trigger>
            <TwButton variant="light"> Dropdown right align </TwButton>
        </template>
        <template #content>
            <div
            class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
            >
            <div class="flex gap-2 items-center">
                <div class="">Select 1</div>
            </div>
            </div>
            <div
            class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
            >
            <div class="flex gap-2 items-center">
                <div class="">Select 2</div>
            </div>
            </div>
        </template>
    </TwDropdownMenu>
</div>

## Usage

```vue{2}
<script setup lang="ts">
import { TwDropdownMenu, TwButton } from "vue3-tailwind"
</script>
```

And on your template use the button

```vue{2}
<template>
<TwDropdownMenu align="left">
    <template #trigger>
        <TwButton variant="light"> Dropdown left align </TwButton>
    </template>
    <template #content>
        <div
            class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
        >
            <div class="flex gap-2 items-center">
                <div class="">Select 1</div>
            </div>
        </div>
        <div class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
        >
            <div class="flex gap-2 items-center">
                <div class="">Select 2</div>
            </div>
        </div>
    </template>
</TwDropdownMenu>
</template>
```

---

## Props

This is set of properties that can be pass to TwDropdownMenu component

## Align

Align is set of predefined css classes use for button:

**_Usage:_**

```js
<TwDropdownMenu align="right">
    <template #trigger>
        <TwButton variant="light"> Dropdown left align </TwButton>
    </template>
    <template #content>
        <div
            class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
        >
            <div class="flex gap-2 items-center">
                <div class="">Select 1</div>
            </div>
        </div>
        <div class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
        >
            <div class="flex gap-2 items-center">
                <div class="">Select 2</div>
            </div>
        </div>
    </template>
</TwDropdownMenu>
```

Here's the list of available aligns:

- left
- right

**Default** Align is `left`

::: details

```js
const alignClass: Record<DropdownAlign, string> = {
  ["left"]: "vt-origin-top-left vt-left-0",
  ["right"]: "vt-origin-top-right vt-right-0",
};

```
:::

## Content Class

Content Class to modify the content classes

### Example
```js
<TwDropdownMenu content-class="!bg-red-200">
    <template #trigger>
        <TwButton variant="light"> Dropdown left align </TwButton>
    </template>
    <template #content>
        <div
            class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
        >
            <div class="flex gap-2 items-center">
                <div class="">Select 1</div>
            </div>
        </div>
        <div class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
        >
            <div class="flex gap-2 items-center">
                <div class="">Select 2</div>
            </div>
        </div>
    </template>
</TwDropdownMenu>

```
The example below will be added to the class of the dropdown content. Preview below
<TwDropdownMenu align="left" content-class="!bg-red-200">
    <template #trigger>
        <TwButton variant="light"> Dropdown left align </TwButton>
    </template>
    <template #content>
        <div
            class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
        >
            <div class="flex gap-2 items-center">
                <div class="">Select 1</div>
            </div>
        </div>
        <div class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
        >
            <div class="flex gap-2 items-center">
                <div class="">Select 2</div>
            </div>
        </div>
    </template>
</TwDropdownMenu>