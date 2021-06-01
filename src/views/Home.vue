<template>
  <hello-world :count="count" :half="half" />
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import HelloWorld from '../components/HelloWorld.vue'
import {AppActions, AppMutations} from '../store'
import {Dispatcher, Committer} from 'vuex-type-helper'
import {getState, getGetters} from '../store'

@Component({
  components: {
    HelloWorld
  },
  created() {
    this.$store.dispatch<Dispatcher<AppActions>>({
      type: 'incAsync',
      amount: 1,
      delay: 1000
    })

    this.$store.commit<Committer<AppMutations>> ({
      type: 'inc',
      amount: 1
    })
  }
})
export default class Home extends Vue {
  get count(): string {
    return getState(this).count.toString()
  }

  get half(): string {
    return getGetters(this).half.toString() 
  }
}
</script>
