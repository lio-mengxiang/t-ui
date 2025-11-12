import { defineComponent, provide, reactive, getCurrentInstance, toRef, toRefs } from 'vue'
import { configProviderInjectionKey } from './context'
import type { ConfigProviderProps } from './interface'

export const ConfigProvider = defineComponent(
  {
    name: 'ConfigProvider',
    props: {
      /**
       * @zh 当前主题
       * @en Current theme
       */
      theme: {
        type: String,
        default: undefined,
      },
      /**
       * @zh 当前语言
       * @en Current language
       */
      lang: {
        type: String,
        default: undefined,
      },
    },
    setup(props) {
      const { global, theme, lang, prefixCls } = props
      const mergeConfig = addCustomConfig
        ? addCustomConfig({ global, theme, lang, prefixCls })
        : { global, theme, lang, prefixCls }

      const config = reactive(toRefs(mergeConfig))

      if (global) {
        const instance = getCurrentInstance()
        if (instance) {
          instance.appContext.app.provide(configProviderInjectionKey, config)
        }
      } else {
        provide(configProviderInjectionKey, config)
      }
      return () => null
    },
  },
  // {
  //   name: 'ConfigProvider',
  //   props: {
  //     /**
  //      * @zh 组件类名前缀
  //      * @en Component classname prefix
  //      */
  //     prefixCls: {
  //       type: String,
  //       default: 'mui',
  //     },
  //     /**
  //      * @zh 是否全局生效
  //      * @en Is global effect
  //      */
  //     global: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     /**
  //      * @zh 当前主题
  //      * @en Current theme
  //      */
  //     theme: {
  //       type: String,
  //       default: undefined,
  //     },
  //     /**
  //      * @zh 当前语言
  //      * @en Current language
  //      */
  //     lang: {
  //       type: String,
  //       default: undefined,
  //     },
  //     s: {
  //       type: Function as (s: T) => T,
  //     },
  //   },
  // },
)
// ) => {
//     const mergeConfig = addCustomConfig
//       ? addCustomConfig({ global, theme, lang, prefixCls })
//       : { global, theme, lang, prefixCls }

//     const config = reactive(toRefs(mergeConfig))

//     if (global) {
//       const instance = getCurrentInstance()
//       if (instance) {
//         instance.appContext.app.provide(configProviderInjectionKey, config)
//       }
//     } else {
//       provide(configProviderInjectionKey, config)
//     }
//     return () => null
//   },
