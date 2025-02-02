<template>
  <v-menu
      v-model="opened"
      close-on-content-click
      offset-y
      transition="scale-transition"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
          v-model="search"
          :placeholder="placeholder"
          @focus="focused = true"
          @blur="focused = false"
          v-on="on"
          prepend-icon="mdi-magnify"
          append-icon="mdi-chevron-down"
      />
    </template>

    <v-list>
      <template v-for="(group, index) in filteredGroupedOptions" :key="index">
        <v-divider v-if="index > 0" />
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title class="font-bold">{{ group.label }}</v-list-item-title>
          </v-list-item>
          <v-list-item
              v-for="option in group.options"
              :key="option.value"
              @click="handleSelect(option)"
          >
            <v-list-item-title>{{ option.label }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </template>
      <template v-if="filteredGroupedOptions.length === 0">
        <v-list-item>
          <v-list-item-title class="text-gray-400">No items</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  placeholder: String,
  modelValue: String,
  options: {
    type: Array,
    default: () => [],
  },
  groupBy: {
    type: Function,
    default: (option) => option.group,
  },
});

const emit = defineEmits(['update:modelValue']);

const opened = ref(false);
const focused = ref(false);
const search = ref('');

const value = computed({
  get: () => props.modelValue,
  set: (newVal) => {
    emit('update:modelValue', newVal);
  },
});

// Filter options based on search input
const filteredOptions = (options) => {
  return options.filter((option) =>
    option.label.toLowerCase().includes(search.value.toLowerCase())
  );
};

// Group options and filter them
const filteredGroupedOptions = computed(() => {
  const groups = {};

  // Grouping options
  props.options.forEach((option) => {
    const groupLabel = props.groupBy(option);
    if (!groups[groupLabel]) {
      groups[groupLabel] = { label: groupLabel, options: [] };
    }
    groups[groupLabel].options.push(option);
  });

  // Filtering grouped options
  return Object.values(groups).map((group) => ({
    label: group.label,
    options: filteredOptions(group.options),
  })).filter((group) => group.options.length > 0);
});

// Handle option selection
const handleSelect = (option) => {
  value.value = option.value;
  search.value = option.label;
  opened.value = false;
};

// Watch for changes to modelValue to update search
watch(() => props.modelValue, (newVal) => {
  const foundOption = props.options.find((option) => option.value === newVal);
  search.value = foundOption ? foundOption.label : '';
});
</script>

<style scoped>
.v-list-item {
  cursor: pointer;
}
</style>
