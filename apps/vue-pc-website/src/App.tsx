import { defineComponent } from 'vue'
import { ConfigProvider } from './ui/config-provider/test'
// import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    return () => (
      <ConfigProvider theme={{}}>
        <div>Hello World</div>
      </ConfigProvider>
    )
  },
})
