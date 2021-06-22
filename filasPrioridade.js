function fila(){

    var itens = []

    this.enqueue = function(element){
        itens.push(element)
    }
    this.dequeue = function(){
        return itens.shift()
    }
    this.front = function(){
        return itens[0]
    }
    this.IsEmpty = function(){
        return itens.length === 0
    }
    this.size = function(){
        return itens.length
    }
    this.print = function(){
        console.log(itens.toString())
    }
 
}

