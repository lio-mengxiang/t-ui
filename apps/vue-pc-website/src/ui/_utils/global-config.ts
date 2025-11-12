import { getCurrentInstance, inject } from 'vue'
import { configProviderInjectionKey } from '../config-provider/context'

const CLASS_PREFIX = 'arco'
const GLOBAL_CONFIG_NAME = '$arco'

export const getPrefixCls = (componentName?: string): string => {
  const instance = getCurrentInstance()
  const configProvider = inject(configProviderInjectionKey, undefined)

  const prefix =
    configProvider?.prefixCls ??
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.classPrefix ??
    CLASS_PREFIX
  if (componentName) {
    return `${prefix}-${componentName}`
  }
  return prefix
}
