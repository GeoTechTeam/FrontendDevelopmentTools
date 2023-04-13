<template>
  <div class="q-pa-md ">
    <q-expansion-item class="container" :style="style" @before-show="startGrow" @after-hide="startShrink"
      icon="filter_list" label="Фильтры" header-class="bg-primary text-white" exploand-icon-class="text-white">
      <q-card>
        <q-card-section>
          <div class="row justify-center">
            <div class="col-sm-4 col-md-2">
              <q-card dark bordered class="my-card bg-primary text-white">
                <q-card-section>
                  <div class="text-h6">Год</div>
                </q-card-section>
                <q-separator dark inset />
                <q-card-section>
                  <q-select dense filled v-model="yearOption" input-debounce="0" :options="yearOptions" color="black"
                    bg-color="white" behavior="menu">
                    <template v-slot:no-option>
                      <q-item>
                        <q-item-section class="text-grey">
                          Нет значений
                        </q-item-section>
                      </q-item>
                    </template>
                  </q-select>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-sm-4 col-md-3 q-mr-sm q-ml-sm ">
              <q-card dark bordered class="my-card bg-primary text-white">
                <q-card-section>
                  <div class="text-h6">Среда</div>
                </q-card-section>
                <q-separator dark inset />
                <q-card-section>
                  <div class="row">
                    <div class="col">
                      <q-select dense filled v-model="envOption" color="black" bg-color="white" :options="envOptions"
                        behavior="menu">
                        <template v-slot:no-option>
                          <q-item>
                            <q-item-section class="text-grey">
                              Нет значений
                            </q-item-section>
                          </q-item>
                        </template>
                      </q-select>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-sm-4 col-md-3">
              <q-card dark bordered class="my-card bg-primary text-white">
                <q-card-section>
                  <div class="text-h6">Программа</div>
                </q-card-section>
                <q-separator dark inset />
                <q-card-section>
                  <div class="row">
                    <div class="col">
                      <q-select dense filled v-model="progOption" color="black" bg-color="white" :options="progOptions"
                        behavior="menu">
                        <template v-slot:no-option>
                          <q-item>
                            <q-item-section class="text-grey">
                              Нет значений
                            </q-item-section>
                          </q-item>
                        </template>
                      </q-select>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-sm-4 col-md-3 q-mr-sm q-ml-sm">
              <q-card dark bordered class="my-card bg-primary text-white">
                <q-card-section>
                  <div class="text-h6">Тип водоснабжения</div>
                </q-card-section>
                <q-separator dark inset />
                <q-card-section>
                  <div class="row">
                    <div class="col">
                      <q-select dense filled v-model="waterTypeOption" color="black" bg-color="white"
                        :options="waterTypeOptions" behavior="menu">
                        <template v-slot:no-option>
                          <q-item>
                            <q-item-section class="text-grey">
                              Нет значений
                            </q-item-section>
                          </q-item>
                        </template>
                      </q-select>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>


        </q-card-section>
      </q-card>

    </q-expansion-item>
  </div>
  <div class="q-pa-md">
    <q-table :fullscreen="fullscreen" bordered fit :rows="rows" :columns="columns" row-key="id" separator="cell">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" title="Изменить имя" buttons v-slot="scope">
              <q-input v-model="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>
          <q-td key="lastname" :props="props">
            {{ props.row.lastname }}
            <q-popup-edit v-model="props.row.lastname" title="Изменить фамилию" buttons v-slot="scope">
              <q-input v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="age" :props="props">
            {{ props.row.age }}
            <q-popup-edit v-model="props.row.age" title="Изменить возраст" buttons v-slot="scope">
              <q-input type="number" v-model="scope.value" dense autofocus />
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props" class=" text-white bg-secondary"
            style="font-size: medium;">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios';
import useQuasar from 'quasar/src/composables/use-quasar.js';
const $q = useQuasar()
const columns = ref([])
const rows = ref([])
const style = ref({ width: '400px' })
const fullscreen = ref(false)
const yearOptions = ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007']
const yearOption = ref('2007')
const envOptions = ['Сточная вода', 'Технологическая вода', 'Шлам', 'Почва', 'Природная вода', 'Разовая']
const envOption = ref('Сточная вода')
const progOptions = ['Экология (полный)', '2А', '8 компонентный', 'Фенолы', 'ХАПВ', 'Хлороформ', 'Цинк', 'Полигоны']
const progOption = ref('Экология (полный)')
const waterTypeOptions = ['Централизованное', 'Не централизованное']
const waterTypeOption = ref('Централизованное')
axios.get(process.env.API + "user")
  .then(response => {
    console.log(response.data.table)
    columns.value = response.data.table.columns
    rows.value = response.data.table.rows
    showNotif()
  })
  .catch(error => {
    console.log(error);
  })

function showNotif() {
  $q.notify({
    message: 'Загружено',
    color: 'green'
  })
}

function startGrow() {
  style.value = { width: '100%' }
}
function startShrink() {
  style.value = { width: '400px' }
}
</script>

<style lang="sass" scoped>
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #00b4ff

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
.container
  transition: width .3s, height .3s
</style>
