<template>
  <Listbox v-model="value">
    <div class="relative mt-1 z-30">
      <ListboxLabel class="block text-gray-700 text-sm font-bold mb-2">
        {{ label }}
      </ListboxLabel>
      <ListboxButton
        class="
          relative
          w-full
          py-2
          pl-3
          pr-10
          text-left
          bg-white
          rounded
          border
          cursor-default
          focus:outline-none
          focus:ring-2
          focus:ring-blue-300
          focus:border-darkBlue
          sm:text-sm
        "
        :class="{
          'focus:ring-blue-300 focus:border-darkBlue': !error,
          'border-red-500 focus:border-red-500 focus:ring-red-300': error,
        }"
      >
        <span class="block truncate" :class="{ 'text-gray-400': !value }">
          {{ value ? value.label : placeHolder }}
        </span>
        <span
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            pointer-events-none
          "
        >
          <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="
            absolute
            z-30
            w-full
            py-1
            mt-1
            overflow-auto
            text-base
            bg-white
            rounded-md
            shadow-lg
            max-h-60
            ring-1 ring-black ring-opacity-5
            focus:outline-none
            sm:text-sm
          "
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in options"
            :key="option.value"
            :value="option"
            as="template"
          >
            <li
              :class="[
                active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                'cursor-default select-none relative py-2 pl-10 pr-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
                >{{ option.label }}</span
              >
              <span
                v-if="selected"
                class="
                  absolute
                  inset-y-0
                  left-0
                  flex
                  items-center
                  pl-3
                  text-lightGreen
                "
              >
                <CheckIcon class="w-5 h-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
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
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { OptionsData } from './types'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    SelectorIcon,
  },
  props: {
    options: {
      type: Array as () => Array<OptionsData>,
      default: () => [],
    },
    fieldValue: {
      type: [String, Number],
      default: null,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeHolder: {
      type: String,
      default: 'Select Item',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['onChange'],
  setup(props, { emit }) {
    const selected = computed(() => {
      const selectedItem = props.options.find(
        (item) => item.value === props.fieldValue
      )
      if (selectedItem) {
        return selectedItem
      } else {
        return null
      }
    })
    const value = computed({
      get: () => selected.value,
      set: (data) => emit('onChange', { name: props.name, value: data?.value }),
    })

    return {
      value,
      selected,
    }
  },
})
</script>
