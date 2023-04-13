<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          ХАМ
        </q-toolbar-title>

        <q-tabs v-model="tab" shrink stretch @update:model-value="updTab">
          <q-route-tab name="table" icon="dataset" label="Таблица" to="/" @click="updTab" exact />
          <q-route-tab name="map" icon="map" label="Карта" to="/map" exact />
          <q-tab name="videos" label="Сбор данных" />
          <q-tab name="protocols" label="Протоколы" />
          <q-tab name="diffs" label="Погрешность" />
          <q-tab name="help" label="Справочник" />
        </q-tabs>
        <q-space />
        <q-select color="black" bg-color="white" filled v-model="model" :options="options" dense>
          <template v-slot:prepend>
            <q-icon name="water_drop" />
          </template>
        </q-select>
      </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>


  </q-layout>
</template>

<script setup>

import { ref } from 'vue'
import useQuasar from 'quasar/src/composables/use-quasar.js';
import {useTabOptionStore} from "stores/tabOptionStore"
const store = useTabOptionStore()
console.log(store.getOption)
const tab = ref(store.getOption)
const options = ['Экология вода', 'Изыскания', 'Артскважины', 'Питьевая вода']
const model = ref('Экология вода')
const $q = useQuasar()

function updTab (Value){
  console.log(Value)
  store.Change(Value)
}

</script>
