import { type VNode, type Slots } from 'vue'
import { ShapeFlags } from './constants'

export const isSlotsChildren = (vn: VNode, children: VNode['children']): children is Slots => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.SLOTS_CHILDREN)
}
