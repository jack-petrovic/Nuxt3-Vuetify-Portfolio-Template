<template>
  <main>
    <div class="account-selector">
      <h2 class="account-title">Select account</h2>
      <p class="hint-title">Use the dropdown to select where you want to login.</p>
      <Dropdown :options="new_options" v-model="selectedValue" placeholder="Select an account" />
      <button class="button button-black">Open dashboard</button>
      <button class="button button-white">Connect account</button>
      <a href="#" class="link-platform">Select another platform</a>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dropdown from './components/Dropdown.vue';

const new_options = [
  {
    label: 'Select',
    options: [{ label: 'Default items', value: 'default_items' }],
  },
  {
    label: 'Development',
    options: [
      { label: 'Development', value: 'development' },
      { label: 'Development (Cloud)', value: 'development_cloud' },
    ],
  },
  {
    label: 'Test',
    options: [
      { label: 'Pre-production', value: 'pre_production' },
      { label: 'Pre-production (Test)', value: 'pre_production_test' },
    ],
  },
  {
    label: 'Production',
    options: [
      { label: 'Prod 1', value: 'prod_1' },
      { label: 'Prod 2', value: 'prod_2' },
    ],
  },
];

const selectedValue = ref(''); // To hold the selected option's value

</script>

<style scoped>
header {
  line-height: 1.5;
}

.account-selector {
  align-content: center;
  justify-content: center;
  max-width: 1024px;
  margin: auto;
}

.account-title {
  margin: auto;
  width: fit-content;
  padding: 10px;
  font-weight: bold;
}

.button {
  display: block;
  margin: 10px auto;
  width: 50%;
  padding: 12px 0;
  font-size: 1em;
  border-radius: 10px;
  border: #222222 solid 2px;
  cursor: pointer;
}

.button:hover {
  opacity: 80%;
}

.button-black {
  color: white;
  background-color: #222222;
}

.button-white {
  color: #222222;
  background-color: white;
}

.link-platform {
  display: block;
  margin: auto;
  width: fit-content;
  color: dodgerblue;
}

.hint-title {
  font-size: 1.2em;
  width: fit-content;
  margin: 20px auto;
  color: #555555;
}

</style>
