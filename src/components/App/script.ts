import { Vue, Component } from 'vue-property-decorator'

@Component
class App extends Vue {

  public activeMatrix: string = 'A'

  public matrixes = {
    A: [
      new Array(3),
      new Array(3),
      new Array(3),
    ],
    B: [
      new Array(3),
      new Array(3),
      new Array(3),
    ],
  }
  
  public swapMatrix (): void {
    const A = this.matrixes.A
    const B = this.matrixes.B

    this.matrixes.A = B
    this.matrixes.B = A
  }

  private clearRow (row: Row): void {
    row.forEach((val: number|undefined, index: number) => {
      this.$set(row, index, undefined)
    })
  }
  
  public clearMatrix (): void {
    const clearRow = this.clearRow
    const A: Matrix = this.matrixes.A
    const B: Matrix = this.matrixes.B

    A.forEach(clearRow)
    B.forEach(clearRow)
  }

  public get resultMatrix () {
    const { A, B } = this.matrixes
    const [aRowCount, aColCount] = [A.length, A[0].length]
    const [bRowCount, bColCount] = [B.length, B[0].length]
    const rowCount = Math.max(aRowCount, bRowCount)
    const colCount = Math.max(aColCount, bColCount)
    const result: Matrix = []

    for (let row = 0; row < rowCount; row++) {
      result.push(new Array(colCount))
    }

    return result
  }

  public calculate (event: Event): void {
    
  }

  public addRow (): void {
    const { matrixes, activeMatrix } = this
    const rowCount: number = matrixes[activeMatrix].length

    if (rowCount === 10) return
    
    matrixes[activeMatrix].push(new Array(3))
  }

  public removeRow (): void {
    const { matrixes, activeMatrix } = this
    const rowCount: number = matrixes[activeMatrix].length

    if (rowCount === 2) return

    matrixes[activeMatrix].pop()
  }

  public addCol (): void {
    const { matrixes, activeMatrix } = this
    const colCount: number = matrixes[activeMatrix][0].length

    if (colCount === 10) return

    matrixes[activeMatrix].forEach((row: Row) => {
      row.push(undefined)
    })
  }

  public removeCol (): void {
    const { matrixes, activeMatrix } = this
    const colCount: number = matrixes[activeMatrix][0].length

    if (colCount === 2) return

    matrixes[activeMatrix].forEach((row: Row) => {
      row.pop()
    })
  }
}

export default App
