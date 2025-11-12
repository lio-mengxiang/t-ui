import { type VNode } from 'vue'
import { ShapeFlags } from './constants'

export const isElement = (vn: VNode) => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.ELEMENT)
}
