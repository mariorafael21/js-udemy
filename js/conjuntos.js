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
}

var setA = new Set()

setA.add(1)
setA.add(2)
setA.add(3)
setA.add(4)

var setB = new Set()

setB.add(0)
setB.add(1)
setB.add(3)
setB.add(5)


var unionAB = setA.union(setB)

console.log(unionAB.values())

