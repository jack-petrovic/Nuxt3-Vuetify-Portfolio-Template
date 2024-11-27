<template>
  <div class="relative" ref="containerRef">
    <div
      @click="toggleDropdown"
      class="flex items-center border border-gray-300 rounded px-3 py-1.5"
      :class="{ 'border-blue-400': opened || focused }"
    >
      <svg width="20px" height="30px" viewBox="0 0 24 24" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
          fill="#0F0F0F"
        />
      </svg>
      <input
        v-model="search"
        @focus="focused = true"
        @blur="focused = false"
        class="flex-1 outline-none mx-2 text-md"
        :placeholder="placeholder"
      />

      <svg
        class="transition-all"
        :class="{ 'rotate-180': opened || focused }"
        width="15px"
        height="15px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4...Z" fill="#000000" />
      </svg>
    </div>
    <div
      v-if="opened || focused"
      class="shadow rounded bg-white absolute top-full w-full mt-1 py-1 overflow-hidden"
    >
      <template v-for="group in props.options">
        <!-- Displaying Group Label -->
        <div class="font-bold px-4 py-2">{{ group.label }}</div>

        <!-- Displaying filtered options -->
        <div v-if="filteredOptions(group.options).length === 0" class="px-4 py-2 text-gray-400">
          No items
        </div>

        <div
          v-for="option in filteredOptions(group.options)"
          :key="option.value"
          @click="handleSelect(option)"
          class="px-4 py-2 hover:bg-gray-200 cursor-pointer"
        >
          <span class="text-sm">{{ option.label }}</span>
        </div>
      </template>
    </div>
  </div>
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
});

const emit = defineEmits(['update:modelValue']);

const getOptionLabel = (val) => {
  if (!val) return '';
  const foundOption = props.options.flatMap((group) => group.options).find((option) => option.value === val);
  return foundOption ? foundOption.label : '';
};

const opened = ref(false);
const focused = ref(false);
const search = ref(getOptionLabel(props.modelValue));

const value = computed({
  get: () => props.modelValue,
  set: (newVal) => {
    emit('update:modelValue', newVal);
  },
});

const filteredOptions = (options) => {
  return options.filter((option) => option.label.toLowerCase().includes(search.value.toLowerCase()));
};

const toggleDropdown = () => {
  opened.value = !opened.value;
  if (!opened.value) {
    search.value = getOptionLabel(value.value);
  }
};

const handleSelect = (option) => {
  value.value = option.value;
  search.value = option.label;
  opened.value = false;
};

watch(value, (newVal) => {
  search.value = getOptionLabel(newVal);
});

const clickOutside = (event) => {
  if (!containerRef.value) return;
  if (!containerRef.contains(event.target)) {
    opened.value = false;
  }
};

watch(focused, (newValue) => {
  if (!newValue && !opened.value) {
    search.value = getOptionLabel(value.value);
  }
});

watch(opened, (newValue) => {
  if (newValue) {
    document.addEventListener('click', clickOutside);
  } else {
    document.removeEventListener('click', clickOutside);
  }
});
</script>

<style scoped>
.relative {
  width: 50%;
  margin: auto;
}
</style>
