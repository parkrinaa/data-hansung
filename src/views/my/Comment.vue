<template>
  <section class="todo-wrapper">
    <div id="btn_group">
      <button @click="goBack" type="button">BACK</button>
    </div>
    <h1 class="top_tit">자유게시판</h1>
    <div class="area">
      <div v-if="pending.length > 0">
        <p class="status busy">총 <strong>{{ pending.length }}</strong> 의 게시물<span v-if="pending.length>1"></span></p>
        <TransitionGroup name="todo-item" tag="ul" class="todo-list">
          <li v-for="(item, index) in pending" v-bind:key="item.title">
            <div class="l_left">이미지</div>
            <!-- <input class="todo-checkbox" v-bind:id="'item_' + item.id" v-model="item.done" type="checkbox"> -->
            <div class="l_right">
              <label v-bind:for="'item_' + item.id"></label>
              <span class="date">{{ today.day }} {{ today.date }}</span> <br/>
              <span class="todo-text">{{ item.title }}</span>
              <span class="delete" @click="deleteItem(item)">삭제</span>
            </div>
          </li>
        </TransitionGroup>  
      </div> 

      <!-- <transition name="slide-fade">
        <p class="status free" v-if="!pending.length" ><img src="https://nourabusoud.github.io/vue-todo-list/images/beer_celebration.svg" alt="celebration">Time to chill!  You have no todos.</p> 
      </transition>  -->

      <div v-if="completed.length > 0 && showComplete">
        <p class="status">Completed tasks: {{ completedPercentage }}</p>
        <TransitionGroup name="todo-item" tag="ul" class="todo-list archived">
          <li v-for="(item, index) in completed" v-bind:key="item.title">
            <input class="todo-checkbox" v-bind:id="'item_' + item.id" v-model="item.done" type="checkbox">
            <label v-bind:for="'item_' + item.id"></label>
            <span class="todo-text">{{ item.title }}</span>
            <span class="delete" @click="deleteItem(item)">삭제</span>
          </li>
        </TransitionGroup>  
      </div>  
      <!-- <div class="control-buttons">
        <div class="btn btn-secondary" v-if="completed.length > 0" @click="toggleShowComplete"><span v-if="!showComplete">Show</span><span v-else>Hide</span> Complete</div>
        <div class="btn btn-secondary" v-if="todoList.length > 0" @click="clearAll">Clear All</div>
      </div> -->
      <form @keydown.enter.prevent="" class="bottom_todo">
        <input type="text" class="input-todo" v-bind:class="{ active: new_todo }" placeholder="내용을 입력해주세요." v-model="new_todo" v-on:keyup.enter="addItem">
        <div class="btn btn-add" v-bind:class="{ active: new_todo }"  @click="addItem">+</div>
      </form>
    </div>
    </section>
</template>


<script>
export default {
  data() {
    return {
      todoList: [
        {"id":0,"title":"한성대학교 미래플러스대학 ICT융합디자인학과 졸업전시회 MADE가 [2023.11.16 ~ 19]일 개최한다네요! 많관부","done":false},
        {"id":1,"title":"이번 졸업전시명 MADE 뜻은 M - MULTIMEDIA, A - ART, D - DESIGN, E - EXHIBITION 의 약자라더라~ 누가 작명했는지 정말 멋진거같은데?","done":false},
        {"id":2,"title":"MADE전시를 통해 한단계 성장한 졸업생 학생들을 마음껏 응원해주세요!","done":false}
      ],
      new_todo: '',
      showComplete: false,
    };
  },
  computed: {},
  mounted() {
    this.getTodos();
  },
  watch: {
    todoList: {
      handler: function(updatedList) {
        localStorage.setItem('todo_list', JSON.stringify(updatedList));
      },
      deep: true
    }
  },
  computed:{
    pending: function() {
      return this.todoList.filter(function(item) {
        return !item.done;
      })
    },
    completed: function() {
      return this.todoList.filter(function(item) {
        return item.done;
      }); 
    },
    completedPercentage: function() {
      return (Math.floor((this.completed.length / this.todoList.length) * 100)) + "%";
    },
    today: function() {
      var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) {
          dd = '0'+dd
      } 

      if(mm<10) {
          mm = '0'+mm
      } 

      today = {
        day: weekday[today.getDay()],
        date:  mm + '-' + dd + '-' + yyyy,
      }

      return(today);
    }
  },
  methods: {
    // get all todos when loading the page
    getTodos() {
      if (localStorage.getItem('todo_list')) {
        this.todoList = JSON.parse(localStorage.getItem('todo_list'));
      }
    },
    // add a new item
    addItem() {
      // validation check
      if (this.new_todo) {
        this.todoList.unshift({
          id: this.todoList.length,
          title: this.new_todo,
          done: false,
        });
      }
      // reset new_todo
      this.new_todo = '';
      // save the new item in localstorage
      return true;
    },
    deleteItem(item) {
      this.todoList.splice(this.todoList.indexOf(item), 1);
    },
    toggleShowComplete() {
      this.showComplete = !this.showComplete;
    },
    clearAll() {
      this.todoList = [];
    },
    goBack(){
        this.$router.go(-1); [2]
    },
  },
}
</script>