// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ToDoList from './ToDoList'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // el 配置项指实例负责管理的区域； #app 指 id="app" 的dom标签里的所有内容（只对其有效）
  components: {ToDoList}, // •components: { App } 意思为引入组件，组件可以写在别的文件中，也可以写在本文件中，需要赋值给变量
  template: '<ToDoList/>' // •template: ‘<App/>’ 意思为替换挂载的元素为引入的组件，具体为何或如何写成一个标签参考vue官方文档-组件基础，删去这个就无法运行
  // render: h => h(ToDoList) 把component和template换成这个也行
}) // 如果一个vue的实例没有template的话，它会用挂载点下面的所有内容（dom标签）当做这个实例的template来使用，也就是说，如果上面没template：这行，就会去index.html的id app标签下的内容当模板来使
