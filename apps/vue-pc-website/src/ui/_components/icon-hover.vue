<template>
  <span
    :class="[
      prefixCls,
      {
        [`${prefix}-icon-hover`]: prefix,
        [`${prefixCls}-disabled`]: disabled,
      },
    ]"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getPrefixCls } from '../_utils/global-config'

export default defineComponent({
  name: 'IconHover',
  props: {
    prefix: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const prefixCls = getPrefixCls('icon-hover')

    return {
      prefixCls,
    }
  },
})
</script>
