<!-- <template>
  <slot />
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
import { defineComponent, provide, reactive, toRefs, getCurrentInstance } from 'vue'
import {
  configProviderInjectionKey,
  type ConfigProvider,
  type addCustomConfigType,
} from './context'

const { prefixCls = 'mui', global = false } = defineProps<{
  prefixCls: string
  global?: boolean
  addCustomConfig: addCustomConfigType<T>
}>()

const config = reactive({
  prefixCls,
})

if (global) {
  const instance = getCurrentInstance()
  if (instance) {
    instance.appContext.app.provide(configProviderInjectionKey, config)
  }
} else {
  provide(configProviderInjectionKey, config)
}
</script> -->
