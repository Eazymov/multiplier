import { Vue, Component } from 'vue-property-decorator'

import { iterate } from 'utils'

@Component
class App extends Vue {

  public error: Error|null = null
  public editing: boolean = false
  public activeMatrix: string = 'A'
  public matrixes = {
    A: [new Array(3), new Array(3), new Array(3)],
    B: [new Array(3), new Array(3), new Array(3)],
  }
  private resultMatrix: Matrix = [[], [], []]

  public get resultRowsCount (): number {
    const { A, B } = this.matrixes
    const [aRowCount, bRowCount] = [A.length, B.length]
    
    return Math.max(aRowCount, bRowCount)
  }

  public get resultColsCount (): number {
    const { A, B } = this.matrixes
    const [aColCount, bColCount] = [A[0].length, B[0].length]
    
    return Math.max(aColCount, bColCount)
  }

  public getResultValue (rowIndex: number, colIndex: number): number|undefined {
    const row: Array<(number|undefined)> = this.resultMatrix[rowIndex];

    if (!row || !row[colIndex]) {
      return undefined
    }

    return row[colIndex]
  }
  
  public swapMatrix (): void {
    const A = this.matrixes.A
    const B = this.matrixes.B

    this.matrixes.A = B
    this.matrixes.B = A
  }
  
  public clearMatrix (): void {
    const { clearRow, resultMatrix } = this
    const { A, B } = this.matrixes

    A.forEach(clearRow)
    B.forEach(clearRow)
    resultMatrix.forEach(clearRow)
  }

  public calculate (event: Event): void {
    const { A, B } = this.matrixes
    const result: Matrix = []
    const aRowCount: number = A.length
    const bRowCount: number = B.length
    const aColCount: number = A[0].length
    const bColCount: number = B[0].length
    
    if (aColCount !== bRowCount) {
      this.error = new Error(`Такие матрицы нельзя перемножить 
                              так как количество столбцов матрицы 
                              А не равно количеству строк матрицы В`)
      return;
    }

    iterate(aRowCount, (rowIndex: number): void => {
      result[rowIndex] = result[rowIndex] || []

      iterate(bColCount, (colIndex: number): void => {
        result[rowIndex][colIndex] = 0

        iterate(aColCount, (index: number): void => {
          let cellValue: number = A[rowIndex][index] * B[index][colIndex];

          (<number> result[rowIndex][colIndex]) += cellValue
        })
      })
    })

    this.resultMatrix = result
  }

  public addRow (matrix: Matrix): void {
    const rowCount: number = matrix.length
    const colCount: number = matrix[0].length

    if (rowCount === 10) {
      return
    }

    matrix.push(new Array(colCount))
    this.error = null
  }

  public removeRow (matrix: Matrix): void {
    const rowCount: number = matrix.length

    if (rowCount === 2) {
      return
    }

    matrix.pop()
    this.error = null
  }

  public addCol (matrix: Matrix): void {
    const colCount: number = matrix[0].length

    if (colCount === 10) {
      return
    }

    matrix.forEach((row: Row) => row.push(undefined))
    this.error = null
  }

  public removeCol (matrix: Matrix): void {
    const colCount: number = matrix[0].length

    if (colCount === 2) {
      return
    }

    matrix.forEach((row: Row) => row.pop())
    this.error = null
  }

  private clearRow (row: Row): void {
    row.forEach((val: number|undefined, index: number) => {
      this.$set(row, index, undefined)
    })
  }
}

export default App
