# Accordion

<script setup>
const accordion = ([
  {
    ref: "example1",
  },
  {
    ref: "example2",
  },
]);
</script>

## Component Preview

<TwAccordion class="bg-white rounded overflow-hidden" :data="accordion">
  <template #header_example1="{ toggleAccordion, ref, isActive }">
    <div
      class="bg-gray-100 text-sky-600 p-4 flex justify-between items-center cursor-pointer duration-75"
      :class="{
        '!bg-sky-100': isActive
      }"
      @click="toggleAccordion(ref)"
    >
      <div>Header</div>
      <button class="flex items-center">
        <TwFeather
          class="transition-all duration-400"
          type="chevron-down"
          :class="{
            'rotate-180': isActive,
          }"
        ></TwFeather>
      </button>
    </div>
  </template>
  <template #example1>
    <div class="p-4">Body 1</div>
  </template>
  <template #header_example2="{ toggleAccordion, ref, isActive }">
    <div
      class="bg-gray-100 text-sky-600 p-4 flex justify-between items-center cursor-pointer duration-75"
      :class="{
        '!bg-sky-100': isActive
      }"
      @click="toggleAccordion(ref)"
    >
      <div>Header 2</div>
      <button class="flex items-center">
        <TwFeather
          class="transition-all duration-400"
          type="chevron-down"
          :class="{
            'rotate-180': isActive,
          }"
        ></TwFeather>
      </button>
    </div>
  </template>
  <template #example2>
    <div class="p-4 bg-gray-50">Body 2</div>
  </template>
</TwAccordion>

## Usage

```vue{2}
<script setup lang="ts">
import { TwAccordion, TwAccordion } from "vue3-tailwind"

const accordion = [
  {
    ref: "example1",
  },
  {
    ref: "example2",
  },
];
</script>
```

And on your template use the button

```vue
<template>
  <TwAccordion class="bg-white rounded overflow-hidden" :data="accordion">
    <template #header_example1="{ toggleAccordion, ref, isActive }">
      <div
        class="bg-sky-100 text-sky-600 p-4 flex justify-between items-center cursor-pointer"
        @click="toggleAccordion(ref)"
      >
        <div>Header</div>
        <button class="flex items-center">
          <TwFeather
            class="transition-all duration-400"
            type="chevron-down"
            :class="{
              'rotate-180': isActive,
            }"
          ></TwFeather>
        </button>
      </div>
    </template>
    <template #example1>
      <div class="p-4">Example 1</div>
    </template>
    <template #header_example2="{ toggleAccordion, ref, isActive }">
      <div
        class="bg-sky-100 text-sky-600 p-4 flex justify-between items-center cursor-pointer"
        @click="toggleAccordion(ref)"
      >
        <div>Header 2</div>
        <button class="flex items-center">
          <TwFeather
            class="transition-all duration-400"
            type="chevron-down"
            :class="{
              'rotate-180': isActive,
            }"
          ></TwFeather>
        </button>
      </div>
    </template>
    <template #example2>
      <div class="p-4">Example 2</div>
    </template>
  </TwAccordion>
</template>
```

---

## Props

This is set of properties that can be pass to TwButton component

## Data

Data is an array of object that contain ref for the ids

\***\*Usage:\*\***

```vue
<script setup>
const accordion = [
  {
    ref: "example1", // change this with your ref name
  },
  {
    ref: "example2",
  },
];
</script>
```

And then we can use that ref inside our template

```vue
<template>
  <TwAccordion class="bg-white rounded overflow-hidden" :data="accordion">
    <template #header_example1="{ toggleAccordion, ref, isActive }">
      <!-- example1 Header goes here -->
    </template>
    <template #example1>
      <!-- example1 Body goes here -->
    </template>
    <template #header_example2="{ toggleAccordion, ref, isActive }">
      <!-- example2 Header goes here -->
    </template>
    <template #example2>
      <!-- example2 Body goes here -->
    </template>
  </TwAccordion>
</template>
```

Notes that it has pattern for Header it uses prefix `header_` and concat with the ref name. If we put name `test` then the header should be `header_test`.

Body doesnt have prefix, it follow the ref name

Header has slot props

- **toggleAccordion**

Toggle Accordion is callback function that will trigger the active state of the ref

toggleAccordion has props to be send **(ref)**

```vue
...
<template #header_example1="{ toggleAccordion, ref, isActive }">
	<div
		class="bg-sky-100 text-sky-600 p-4 flex justify-between items-center cursor-pointer"
		@click="toggleAccordion(ref)" // this will trigger the isActive to be true/false
	>
		<!-- Header -->
	</div>
</template>
...
```

- **ref**

Ref is just the ref name

- **isActive**

Is Active is ref active state, it give boolean values if its open `true` or close `false`

## Keep Alive

keep-alive to keep the open state stays open whenever we click other accordion.

Default keep-alive `false`

**_Usage:_**

```vue
<template>
  <TwAccordion :data="accordion" keep-alive>
    <!-- Your accordions -->
  </TwAccordion>
</template>
```
