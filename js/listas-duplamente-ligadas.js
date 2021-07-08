function DoublyLinkedList(){

    var Node = function(element){
        this.element = element
        this.next = null
        this.previus = null
    }

    var length = 0
    var head = null
    var tail =null

    this.append = function(element){
        // adiciona no fim da lista
        var node = new Node(element),
        current

        if(head === null){
            head = node
            tail = node
        }else{
            current = head

            while(current.next){
                current = current.next
            }
            current.next = node
            tail = node
        }

        length++
    }

    this.insert = function(position, element){
        if(position >= 0 && position <= length){
            var node = new Node(element),
            current = head,
            previus, 
            index = 0
            if(position === 0){
                if(!head){
                    head = node
                    tail = node
                }else{
                    node.next = current
                    current.prev = node
                    head = node
                }
            }else if(position === length){
                current = tail
                current.next = node
                node.prev = current
                tail = node
            }else{
                while(index++ < position){
                    previus = current
                    current = current.next
                }
                node.next = current
                previus.next = node
                current.prev = node
                node.prev = previus
            }
            length++
            return true
        } else{
            return false
        }
        
    }

    this.removeAt = function(position){
        
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

var dll = new DoublyLinkedList()

dll.append('João')
dll.append('Jose')
dll.append('Maria')
dll.insert(0,'Carlos')
dll.insert(4,'Lucas')
dll.insert(2,'Ana')
dll.print()