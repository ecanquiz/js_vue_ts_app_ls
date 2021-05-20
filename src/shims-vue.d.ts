/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'  
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare interface process {
  env: {
    VUE_APP_CONFIG: string
  }
}

