<template>
  <div>
    <div class="inputBox">
      <h1>To Do List</h1>
      <input v-model="inputValues"/>
      <button @click="takeClick">提交</button>
    </div>
    <ul id="contentList">
      <!-- <li v-for='(item,index) of items' :key='index'>{{item}}</li> -->
      <todo-item v-for='(item,index) of items'
      :key='index'
      :content='item'
      :index='index'
      @delete="takeDelete">
      </todo-item>
    </ul>
  </div>
</template>

<script>
import ToDoItem from './components/ToDoItem'
export default {
  components: {'todo-item': ToDoItem},
  data () {
    return {
      inputValues: '',
      items: []
    }
  },
  methods: {
    takeClick () {
      this.items.push(this.inputValues)
      this.inputValues = ''
    },
    takeDelete (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.item {
 color: green;
}

.inputBox{
  text-align: center;
  margin-top:30px;
}

.inputBox h1{
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#contentList{
  display: block;
  margin:30px auto;
  width:30%;
  text-align: left;
}
</style>
