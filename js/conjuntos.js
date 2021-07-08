function Set(){

    var itens = {}

    this.add = function(value){
        if(!this.has(value)){
            itens[value] = value
            return true
        }
        return false
    }

    this.delete = function(value){
        if(this.has(value)){
            delete itens[value]
            return true
        }
        return false
    }
    this.has = function(value){
        return itens.hasOwnProperty(value)

    }
    this.clear = function(){
        itens = {}
    }
    this.size = function(){
        return Object.keys(itens).length
    }
    this.values = function(){
        var values = [],
        keys = Object.keys(itens)
        for(var i = 0; i < keys.length; i++){
            values.push(itens[keys[i]])
        }
        return values
    }

    this.union = function(otherSet){
        var unionSet = new Set(),
        values = this.values()
        
        for(var i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }
        values = otherSet.values()

        for(var i = 0; i < values.length; i++){
            unionSet.add(values[i])
        }
        return unionSet
    }

    this.intersection = function(otherSet){
        var intersectionSet = new Set(),
        values = this.values()

        for(var i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    this.diference = function(otherSet){
        var diferenceSet = new Set(),
        values = this.values()

        for(var i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                diferenceSet.add(values[i])
            }
        }
        return diferenceSet
    }

    this.subset = function(otherSet){
        if(this.size() > otherSet.size()){
            return false
        }else{
            var values = this.values()

            for( var i = 0; i < values.length; i++){
                if(!otherSet.has(values[i])){
                    return false
                }
            }
            return true
        }
    }
}

var clienteA = new Set()

clienteA.add(1)
clienteA.add(2)
clienteA.add(3)
clienteA.add(4)

var clienteB = new Set()

clienteB.add(0)
clienteB.add(1)
clienteB.add(3)
clienteB.add(5)


var intersectionAB = clienteA.intersection(clienteB)

console.log(intersectionAB.values())

var diferenceAB = clienteA.diference(clienteB)

console.log(diferenceAB.values())


console.log(clienteA.subset(clienteB))

