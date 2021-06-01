<template>
  <v-container>
    <v-row class="text-center">
      <v-col>count: {{ count }}</v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>half: {{ half }}</v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop({required: true, type: String})
  count!: string

  @Prop({required: true, type: String})
  half!: string
}
</script>
