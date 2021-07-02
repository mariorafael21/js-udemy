
function Queue(){

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

function hotPotato(nameList, num){
    var queue = new Queue()

    for(var i = 0; i < nameList.lenght; i++){
        queue.enqueue (nameList[i])
    }

    var eliminated = ''

    while(queue.size() > 1){
        for(var i = 0; i < num; i++){
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(eliminated + 'Foi eliminado do jogo:')
    }
    return queue.dequeue()
}

var names = ['Ana', 'Pedro', 'João', 'Maria', 'paulo']
var winner = hotPotato (names, 7)
console.log('o vencedor é:' + winner)