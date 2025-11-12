import { type VNode } from 'vue'
import { isElement } from './isElement'
import { isComponent } from './isComponent'
import { isArrayChildren } from './isArrayChildren'
import { isSlotsChildren } from './isSlotsChildren'
import { isArray } from './is'

export const getFirstComponent = (children: VNode[] | undefined): VNode | undefined => {
  if (!children) {
    return undefined
  }

  for (const child of children) {
    if (isElement(child) || isComponent(child)) {
      return child
    }
    // If the current node is not a component, continue to find subcomponents
    if (isArrayChildren(child, child.children)) {
      const result = getFirstComponent(child.children)
      if (result) return result
    } else if (isSlotsChildren(child, child.children)) {
      const children = child.children.default?.()
      if (children) {
        const result = getFirstComponent(children)
        if (result) return result
      }
    } else if (isArray(child)) {
      const result = getFirstComponent(child)
      if (result) return result
    }
  }

  return undefined
}
