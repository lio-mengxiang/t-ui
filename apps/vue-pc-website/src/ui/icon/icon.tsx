import { defineComponent, ref } from 'vue'
import type { IconProps } from './interface'
import { getSize } from './utils'

const defaultProps = {
  size: '1em',
}

export const Icon = defineComponent<IconProps>({
  name: 'Icon',
  props: {
    size: {
      type: [String, Number],
      default: defaultProps.size,
    },
    className: String,
    style: [Object, String],
  },
  setup(props, { slots }) {
    const [width, height] = getSize(props.size)

    return () => (
      <svg
        class={props.className}
        width={width}
        height={height}
        style={props.style}
        focusable="false"
        fill="currentColor"
      >
        {slots.default?.()}
      </svg>
    )
  },
})
