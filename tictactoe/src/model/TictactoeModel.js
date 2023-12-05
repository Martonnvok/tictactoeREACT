export default class TictactoeModel{
    #lista=[]
    #allapot = "x";
    constructor(){
        this.#lista = ["0", " ", " ", " x", "0", " ", " ","x", "x"]
    }
    getLista(){
        return [...this.#lista]
    }
    setLista(index){
        this.#lista[index]="x"
        if (this.#allapot === "x") {
            this.#allapot = "o"
        }
        else
        {
            this.#allapot = "x"
        }
    }
}