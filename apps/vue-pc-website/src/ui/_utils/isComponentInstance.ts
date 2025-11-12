import { type ComponentPublicInstance } from 'vue'

export const isComponentInstance = (value: any): value is ComponentPublicInstance => {
  return value?.$ !== undefined
}
