

function PriorityQueue(){
var itens = []

    function QueueElemnt (element, priority){
        this.element =  element
        this.priority = priority
    }

    this.enqueue = function(element, priority){
        var queueElement = new QueueElemnt(element, priority)
        var added = false
        for(var i = 0; i < itens.length; i++){
            if(queueElement.priority < itens[i].priority){
                itens.splice(i, 0, queueElement)
                added = true
                break
            }
        }
        if(!added){
            itens.push(queueElement)
        }
    }
    
    this.dequeue = function(){
        return itens.shift()
    }

    this.print = function(){
        for(var i =0; i < itens.length; i++){
            console.log(itens[i].element + ' - ' + itens[i].priority)
        }
    }
}


var pqueue = new PriorityQueue()


pqueue.enqueue('Carlos', 6)
pqueue.enqueue('Theo', 1)
pqueue.enqueue('Marcos', 4)
pqueue.enqueue('Maria', 3)
pqueue.enqueue('Joao', 5)
pqueue.enqueue('Jose', 2)
pqueue.print()

pqueue.dequeue()
pqueue.print()