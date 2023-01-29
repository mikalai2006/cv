<script lang="ts" setup>
import {
  LIcon,
  IField,
  LSpinner,
  LMultiSelect,
  LMultiSelectButton,
  LMultiSelectSearch,
  LMultiSelectList,
  LMultiSelectGroup,
  LMultiSelectOptions,
  LMultiSelectOption,
} from "vueco";

import { iChevronDown, iCheck } from "@/composable/useIcons";

export interface IPropsMultiSelect {
  modelValue: number | string | [];
  error?: string;
  schema: IField;
}

const props = withDefaults(defineProps<IPropsMultiSelect>(), {
  modelValue: () => {
    return [];
  },
});

const emit = defineEmits(["update:modelValue", "on-input", "on-load-items"]);

const selectModel = computed<number | string | []>({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const inputElement = ref(null);
defineExpose({
  inputElement,
});
</script>
<template>
  <slot name="label" :inputElement="inputElement"></slot>
  <!-- <div
    class="flex items-center"
    :class="[
      'rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 placeholder-s-400 dark:placeholder-s-400 bg-transparent',
      {
        'border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500':
          error,
      },
      {
        'border-s-200 dark:border-s-700 focus-within:ring-p-500 focus-within:border-p-500':
          !error,
      },
    ]"
  >
    <slot name="before"></slot>
    <LMultiSelect
      :ref="(el) => (inputElement = el)"
      v-model="selectModel"
      v-bind="$attrs"
      :schema="schema"
      class="relative px-3 py-2 flex-auto"
      #default="{ show, loading, disabled }"
      @on-load-items="$emit('on-load-items')"
      @on-input="$emit('on-input')"
    >
      <LMultiSelectButton
        :class="[
          'outline-none flex items-center mt-1 cursor-text w-full transition',
        ]"
      >
        <div class="w-full flex space-y-1 items-center">
          <LMultiSelectList
            #default="{ selectedOptions, removeOption }"
            class="flex-auto flex flex-wrap"
          >
            <LMultiSelectItem
              v-for="option in selectedOptions"
              :key="option.id"
              class="overflow-hidden flex items-center rounded-md mr-2 mb-2 bg-s-200 dark:bg-s-600 text-black dark:text-white"
            >
              <slot
                name="selected-item"
                :option="option"
                :removeOption="removeOption"
              >
                <span class="block flex-auto px-2 py-1">
                  {{ option[schema.keyLabel] || option }}
                </span>
                <span
                  :aria-hidden="true"
                  class="btn btn-second rounded-md text-xs py-1 px-2 mr-1"
                  @click.stop="removeOption(option)"
                >
                  X
                </span>
              </slot>
            </LMultiSelectItem>
            <slot name="search">
              <LMultiSelectSearch
                v-if="schema.keyFilter"
                #default="{ ref, value, onInput, placeholder }"
              >
                <input
                  :ref="(el) => (ref.value = el)"
                  :value="value"
                  :placeholder="placeholder"
                  class="outline-none px-2 py-1"
                  @input="onInput"
                />
              </LMultiSelectSearch>
            </slot>
            <div
              v-if="!schema.keyFilter && !selectedOptions.length"
              class="px-3 py-2 text-s-500"
            >
              {{ schema.placeholder }}
            </div>
          </LMultiSelectList>
          <div>
            <LSpinner v-if="loading" />
            <LIcon :class="['transition-transform', { ' rotate-180': show }]">
              {{ iChevronDown }}
            </LIcon>
          </div>
        </div>
      </LMultiSelectButton>
      <div
        class="transition shadow-2xl overflow-hidden outline-none border border-s-200 focus:ring-1 focus-within:ring-1 dark:border-s-700 focus:ring-p-500 focus-within:ring-p-500 rounded-md max-h-64 b-scroll overflow-y-auto absolute z-50 top-full left-0 right-0 bg-white dark:bg-s-800"
        :class="[show ? 'block' : 'hidden', error ? 'mt-8' : 'mt-2']"
      >
        <div>
          <LMultiSelectOptions #default="{ groups }">
            <div
              class="bg-white dark:bg-s-800 border-b border-s-200 dark:border-s-700"
            >
              <slot name="actions"></slot>
            </div>
            <LMultiSelectGroup
              v-for="group in groups"
              :group="group.key"
              #default="{ options }"
            >
              <div v-if="group.key !== 'default'">
                {{ group.key }}
              </div>
              <LMultiSelectOption
                v-for="option in options"
                :value="option"
                class="cursor-pointer focus:outline-none focus:bg-black/10 hover:bg-black/10"
                #default="{ value, selected }"
              >
                <slot name="option" :option="option" :selected="selected">
                  <div
                    :class="[
                      'flex p-2 items-center ',
                      selected ? 'text-black dark:text-white font-medium' : '',
                    ]"
                  >
                    <div
                      :class="[
                        'flex items-center border rounded-md h-6 w-6 mr-2',
                        selected
                          ? 'bg-p-600 border-p-600'
                          : 'border-s-300 dark:border-s-700',
                      ]"
                    >
                      <LIcon
                        v-if="selected"
                        :class="[
                          'text-xl',
                          {
                            'text-white': selected,
                          },
                        ]"
                      >
                        {{ iCheck }}
                      </LIcon>
                    </div>

                    {{ option[schema.keyLabel] || option }}
                  </div>
                </slot>
              </LMultiSelectOption>
            </LMultiSelectGroup>
          </LMultiSelectOptions>
        </div>
      </div>
    </LMultiSelect>
    <slot name="after"></slot>
  </div>
  <slot name="error" :error="error"></slot> -->
  <slot name="description"></slot>
</template>
