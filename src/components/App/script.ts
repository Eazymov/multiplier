import { Vue, Component } from 'vue-property-decorator'

const defaultMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

@Component
class App extends Vue {

  public activeMatrix: string = 'A'

  public matrixes = {
    A: defaultMatrix,
    B: defaultMatrix,
    C: defaultMatrix,
  }

  get result () {
    const { A, B } = this.matrixes
    const [aRowCount, aColCount] = [A.length, A[0].length]
    const [bRowCount, bColCount] = [B.length, B[0].length]
    const rowCount = Math.max(aRowCount, bRowCount)
    const colCount = Math.max(aColCount, bColCount)
    const result = []

    for (let row = 0; row < rowCount; row++) {
      result.push([])

      for (let col = 0; col < colCount; col++) {

      }
    }
  }

  public calculate (event: Event): void {
    
  }

  public addRow (): void {
    
  }

  public removeRow (): void {
    
  }

  public addCol (): void {
    
  }

  public removeCol (): void {
    
  }
}

export default App
