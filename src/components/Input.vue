<template>
  <div class="mb-2">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="name">
      {{ label }}
    </label>
    <input
      v-model="value"
      :class="{
        'border-red-500 focus:border-red-500 focus:ring-red-300': error,
        'focus:border-darkBlue focus:ring-blue-200': !error,
      }"
      class="
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline focus:ring-2
      "
      :id="name"
      :type="inputType"
      :placeholder="placeholder"
    />
    <div
      class="text-red-500 text-xs mt-1"
      :class="{
        visible: error,
        invisible: !error,
      }"
    >
      <slot name="errorMessage">
        <p>Invalid Input</p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    fieldValue: {
      type: [String],
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['onChange'],
  setup(props, { emit }) {
    const value = computed({
      get: () => props.fieldValue,
      set: (value) =>
        emit('onChange', {
          name: props.name,
          value,
        }),
    })
    return {
      value,
    }
  },
})
</script>

<style></style>
