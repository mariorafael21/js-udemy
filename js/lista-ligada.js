function linkedList(){

    var Node = function(element){
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element){
        // adiciona no fim da lista
        var node = new Node(element),
        current

        if(head === null){
            head = node
        }else{
            current = head

            while(current.next){
                current = current.next
            }
            current.next = node
        }

        length++
    }

    this.insert = function(position, element){
        //adiciona um elemento numa posição especifica
        if(position >= 0 && position <= length){
        var node = new Node(element),
        current = head,
        previous,
        index = 0

        if(position === 0){
            node.next = current
            head = node
        }else {
            while(index++ < position){
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node
        }
             length++
             return true
        }else {
        return false
        }
    }

    this.removeAt = function(position){
        //remove um elemento numa posição especifica
        if(position > - 1 && position < length){
            var current = head,
            previous,
            index = 0

            if(position === 0){
                head = current.next
            }else {
                while(index++ < position){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        }else{
            return null
        }
    }

    this.remove = function(element){
        //remove element
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function(element){
        //retorna a posição do elemento
        var current = head,
        index = 0

        while(current){
            if(element === current.element){
                return index
            }
            index ++
            current = current.next
        }
        return -1
    }

    this.isEmpty = function(){
        //retorna se esta vazio
        return length === 0
    }

    this.size = function(){
        //retorna o tamanho do lista
        return length
    }

    this.getHead = function(){
        return head
    }

    this.toString = function(){
        // converte em string
        var current = head,
        string = ''

        while(current){
            string += current.element + ' '
            current = current.next
        }
        return string
        
    }

    this.print = function(){
        //imprime no terminal
        console.log(this.toString())
    }

}

var list = new linkedList()
list.append('maria')
list.append('joao')
list.append('jose')
list.append('paula')

list.print()
list.insert(1, 'Rafael')
list.print()

console.log(list.isEmpty())
console.log(list.size())
console.log(list.getHead())
