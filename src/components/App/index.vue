<template lang="pug">
  main.app
    form.app-aside(@submit.prevent="calculate")
      button.btn--primary(type="submit") Умножить матрицы

      button.btn--default(type="button" @click="clearMatrix") Очистить матрицы
      button.btn--default(type="button" @click="swapMatrix") Поменять матрицы местами

      div.radio
        input(type="radio"
              name="radio"
              value="A"
              v-model="activeMatrix"
              id="matrix-a-option")
        label(for="matrix-a-option") Матрица А
        input(type="radio"
              name="radio"
              value="B"
              v-model="activeMatrix"
              id="matrix-b-option")
        label(for="matrix-b-option") Матрица В

      div.action-row
        button.btn--default(type="button" @click="addRow") Добавить
        button.btn--default(type="button" @click="removeRow") Удалить
        label строку

      div.action-row
        button.btn--default(type="button" @click="addCol") Добавить
        button.btn--default(type="button" @click="removeCol") Удалить
        label столбец

    section.app-content
      div.matrix.matrix--c
        div.row(v-for="(row, rowIndex) in resultMatrix" type="text")
          input(v-for="(item, index) in row"
                :placeholder="`c${rowIndex + 1},${index + 1}`"
                disabled)

      div.matrix.matrix--a
        div.row(v-for="(row, rowIndex) in matrixes.A" type="text")
          input(v-for="(item, index) in row"
                v-model.number="matrixes.A[rowIndex][index]"
                :placeholder="`a${rowIndex + 1},${index + 1}`")

      div.matrix.matrix--b
        div.row(v-for="(row, rowIndex) in matrixes.B" type="text")
          input(v-for="(item, index) in row"
                :placeholder="`b${rowIndex + 1},${index + 1}`")

</template>

<script lang="ts" src="./script"></script>

<style lang="sass" src="./style.sass"></style>

