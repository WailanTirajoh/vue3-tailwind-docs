# Datatable Server Side

Datatable component wrapper to show data from API.

## Component Preview

<script setup lang="ts">
import { ref } from "vue";
const data = ref({
  column: [
    {
      label: "Brand",
      field: "brand",
      width: "400px",
      sortable: true,
    },
    {
      label: "Category",
      field: "category",
      width: "400px",
      sortable: true,
    },
    {
      label: "Description",
      field: "description",
      width: "400px",
      sortable: true,
    },
    {
      label: "Action",
      field: "action",
      width: "400px",
      sortable: false,
    },
  ],
  data: [],
  limit: 5,
  offset: 0,
  search: "",
  selected: [],
  sortBy: "status",
  sortType: "asc",
  setting: {
    checkbox: true,
    limitOption: [
      {
        label: "5",
        value: 5,
      },
      {
        label: "10",
        value: 10,
      },
      {
        label: "50",
        value: 50,
      },
      {
        label: "100",
        value: 100,
      },
      {
        label: "200",
        value: 200,
      },
    ],
  },
});

// Replace this with your API call
// You can use Axios / Fetch or other HTTP Client plugin.
// It required to return the array data and totalData
const fetchData = async () => {
  const baseUrl = "https://dummyjson.com/products";
  const response = await fetch(
    baseUrl +
      "?" +
      new URLSearchParams({
        limit: data.value.limit.toString(),
        skip: data.value.offset.toString(),
        q: data.value.search.toString(),
        sortType: data.value.sortType,
        sortBy: data.value.sortBy,
      })
  );
  const responseJson = await response.json();
  return {
    data: responseJson["products"],
    totalData: responseJson["total"],
  };
};
</script>

<TwDatatableServer
  :fetch-data="fetchData"
  v-model:search="data.search"
  v-model:limit="data.limit"
  v-model:offset="data.offset"
  v-model:selected="data.selected"
  v-model:sort-by="data.sortBy"
  v-model:sort-type="data.sortType"
  :column="data.column"
  :setting="data.setting"
>
  <template #row="{ column, data }">
    <template v-if="column.field === 'brand'">
      {{ data.brand }}
    </template>
    <template v-if="column.field === 'category'">
      {{ data.category }}
    </template>
    <template v-if="column.field === 'description'">
      {{ data.description }}
    </template>
    <template v-if="column.field === 'action'">
      <div class="flex gap-2 justify-center">
        <TwButton variant="secondary">Edit</TwButton>
        <TwButton variant="danger">Delete</TwButton>
      </div>
    </template>
  </template>
</TwDatatableServer>

## Usage

```vue
<script setup lang="ts">
import { ref } from "vue";
import { TwDatatableServer } from "vue3-tailwind";
const data = ref({
  column: [
    {
      label: "Brand",
      field: "brand",
      width: "400px",
      sortable: true,
    },
    {
      label: "Category",
      field: "category",
      width: "400px",
      sortable: true,
    },
    {
      label: "Description",
      field: "description",
      width: "400px",
      sortable: true,
    },
    {
      label: "Action",
      field: "action",
      width: "400px",
      sortable: false,
    },
  ],
  data: [],
  limit: 5,
  offset: 0,
  search: "",
  selected: [],
  sortBy: "status",
  sortType: "asc",
  setting: {
    checkbox: true,
    limitOption: [
      {
        label: "5",
        value: 5,
      },
      {
        label: "10",
        value: 10,
      },
      {
        label: "50",
        value: 50,
      },
      {
        label: "100",
        value: 100,
      },
      {
        label: "200",
        value: 200,
      },
    ],
  },
});

// Replace this with your API call
// You can use Axios / Fetch or other HTTP Client plugin.
// It required to return the array data and totalData
const fetchData = async () => {
  const baseUrl = "https://dummyjson.com/products";
  const response = await fetch(
    baseUrl +
      "?" +
      new URLSearchParams({
        limit: data.value.limit.toString(),
        skip: data.value.offset.toString(),
        q: data.value.search.toString(),
        sortType: data.value.sortType,
        sortBy: data.value.sortBy,
      })
  );
  const responseJson = await response.json();
  return {
    data: responseJson["products"],
    totalData: responseJson["total"],
  };
};
</script>

<template>
  <TwDatatableServer
    :fetch-data="fetchData"
    v-model:search="data.search"
    v-model:limit="data.limit"
    v-model:offset="data.offset"
    v-model:selected="data.selected"
    v-model:sort-by="data.sortBy"
    v-model:sort-type="data.sortType"
    :column="data.column"
    :setting="data.setting"
  > 
  </TwDatatableServer>
</template>
```

## Props

| Name      | Required |    Type |
| --------- | :------: | ------: |
| column    |   true   |   Array |
| limit     |   true   |  number |
| offset    |   true   |  number |
| column    |   true   |   Array |
| fetchData |   true   | Promise |
| isLoading |  false   | boolean |
| sortBy    |  false   |  string |
| sortType  |  false   |  string |
| summary   |  false   |  string |
| search    |  false   |  string |
| setting   |  false   |  Object |
| selected  |  false   |   Array |

## Slots

- column

Column slot by default will have some functional handler inside and class binding. you can replace it with your own template

```vue
<template>
  <TwDatatableServer>
    <template #column="{ column, sortType, sortBy }">
      <!-- Your html goes here -->
    </template>
  </TwDatatableServer>
</template>
```

- row

Row slot by default will show the data based on the column data given. we can replace the template like this to modify the UI

```vue
<template>
  <TwDatatableServer
    :fetch-data="fetchData"
    v-model:search="data.search"
    v-model:limit="data.limit"
    v-model:offset="data.offset"
    v-model:selected="data.selected"
    v-model:sort-by="data.sortBy"
    v-model:sort-type="data.sortType"
    :column="data.column"
    :setting="data.setting"
  >
    <template #row="{ column, data }">
      <template v-if="column.field === 'brand'">
        {{ data.brand }}
      </template>
      <template v-if="column.field === 'category'">
        {{ data.category }}
      </template>
      <template v-if="column.field === 'description'">
        {{ data.description }}
      </template>
      <template v-if="column.field === 'action'">
        <div class="flex gap-2 justify-center">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </template>
    </template>
  </TwDatatableServer>
</template>
```

- Empty

The empty slot is shown when the data is empty

```vue
<template>
  <TwDatatableServer
    :fetch-data="fetchData"
    v-model:search="data.search"
    v-model:limit="data.limit"
    v-model:offset="data.offset"
    v-model:selected="data.selected"
    v-model:sort-by="data.sortBy"
    v-model:sort-type="data.sortType"
    :column="data.column"
    :setting="data.setting"
  >
    <template #empty>
      <div class="p-2 rounded">Sorry, No Data Available</div>
    </template>
  </TwDatatableServer>
</template>
```