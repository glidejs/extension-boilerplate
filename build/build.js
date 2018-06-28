import banner from './banner'
import babel from 'rollup-plugin-babel'

export default {
  name: 'GlideExtensionBoilerplate',
  output: {
    banner
  },
  plugins: [
    babel({
      plugins: [
        'external-helpers',
        'transform-object-assign'
      ]
    })
  ]
}
