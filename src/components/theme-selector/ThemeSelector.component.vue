<template>
  <div class="theme-selector">
    <div class="theme-radio-group">
      <label
        role="radio"
        v-for="(theme, index) in themes"
        :key="index"
        :class="`theme-radio ${ theme.name } ${theme.selected ? 'selected' : ''}`.trim()"
      >
        <i class="material-icons">color_lens</i>
        <input
          type="radio"
          class="icon-button"
          name="locale"
          :value="theme.selected"
          v-model="theme.selected"
          @click="onThemeClicked(theme)"/>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, onMounted, ref } from 'vue'

  interface ThemeInfoInterface {
    selected: boolean
    name: string
    bodyCss:string
  }

  const themes: ThemeInfoInterface [] = reactive([{
    selected: false,
    name: 'light',
    bodyCss: 'default'
  }, {
    selected: false,
    name: 'dark',
    bodyCss: 'dark-theme'
  }, {
    selected: false,
    name: 'navy',
    bodyCss: 'navy-theme'
  }])

  export default defineComponent({
    components: {},
    setup(props, { emit }) {

      const onThemeClicked = (themeClicked: ThemeInfoInterface) => {
        document.body.className= ''
        document.body.classList.add(themeClicked.bodyCss)	      
	      // select only the theme clicked
        themes.forEach(theme => {
          theme.selected = theme.name === themeClicked.name
        })
      }

      onMounted(() => {
        const defaultTheme = themes.find(theme => theme.name === 'dark')
        if (defaultTheme) {
          onThemeClicked(defaultTheme)
        }
      })

      return {
        themes,
        onThemeClicked
      }
    }
  })
</script>

