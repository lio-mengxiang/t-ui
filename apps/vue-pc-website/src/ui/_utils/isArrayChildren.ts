import { type VNode } from 'vue'
import { ShapeFlags } from './constants'

export const isArrayChildren = (vn: VNode, children: VNode['children']): children is VNode[] => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.ARRAY_CHILDREN)
}
