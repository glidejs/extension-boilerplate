import build from './build'

export default Object.assign(build, {
  input: 'src/index.js',
  output: Object.assign(build.output, {
    file: 'dist/glide-extension-boilerplate.js',
    format: 'umd'
  })
})
