/**
 * @title ConfigProvider
 */
export interface ConfigProviderProps<T extends Record<string, any> = Record<string, any>> {
  global?: boolean
  prefixCls?: string
  /**
   * @zh 当前主题
   * @en Current theme
   */
  theme?: string
  /**
   * @zh 当前语言
   * @en Current language
   * @jumpTo addCustomConfigType
   */
  lang?: string
  addCustomConfig?: addCustomConfigType<T>
}

/**
 * @title addCustomConfigType
 * @link true
 */
export type addCustomConfigType<T> = (
  config: Omit<ConfigProviderProps, 'addCustomConfig'>,
) => Omit<ConfigProviderProps, 'addCustomConfig'> & T
