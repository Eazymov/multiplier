<template lang="pug">
  form.app(@submit.prevent="calculate")
    aside.app-aside(:class="{ error, editing }")
      button.btn--primary(type="submit") Умножить матрицы

      button.btn--default.clear(type="button" @click="clearMatrix") Очистить матрицы
      button.btn--default.swap(type="button" @click="swapMatrix") Поменять матрицы местами

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
        button(class="btn--default add"
               type="button"
               @click="addRow(matrixes[activeMatrix])") Добавить
        button(class="btn--default remove"
               type="button"
               @click="removeRow(matrixes[activeMatrix])") Удалить
        label строку

      div.action-row
        button(class="btn--default add"
               type="button"
               @click="addCol(matrixes[activeMatrix])") Добавить
        button(class="btn--default remove"
               type="button"
               @click="removeCol(matrixes[activeMatrix])") Удалить
        label столбец

      div.error-text {{ error && error.message }}

    section.app-content
      div.matrix.matrix--c
        div.row(v-for="rowIndex in resultRowsCount")
          input(v-for="(colIndex in resultColsCount"
                :placeholder="`c${rowIndex},${colIndex}`"
                :value="getResultValue(rowIndex - 1, colIndex - 1)"
                disabled)

      each matrixKey in ['A', 'B']
        div(class="matrix matrix--" + matrixKey)
          span.title= matrixKey
          div.row(v-for=`(row, rowIndex) in matrixes.${matrixKey}`)
            input(v-for="(item, colIndex) in row"
                  type="number"
                  min="0" max="10"
                  @focus="editing = true"
                  @blur="editing = false"
                  required="true"
                  v-model=`matrixes['${matrixKey}'][rowIndex][colIndex]`
                  :placeholder=`'${matrixKey}' + (rowIndex + 1) + ',' + (colIndex + 1)`)

</template>

<script lang="ts" src="./script"></script>

<style lang="scss" src="./style.scss"></style>

