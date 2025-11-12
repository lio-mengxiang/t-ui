import { type VNode, type VNodeTypes, type Component } from 'vue'
import { ShapeFlags } from './constants'

export const isComponent = (vn: VNode, type?: VNodeTypes): type is Component => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.COMPONENT)
}
