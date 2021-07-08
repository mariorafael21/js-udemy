function Stack(){

var itens = []

this.push = function(elemento){ // insere um item na pilha
    itens.push(elemento)
}
this.pop = function(){ // remove item no topo da pilha
    return itens.pop()
}
this.peek = function(){ // devolve o elemento que está no topo da pilha
    return itens[itens.length - 1]
}
this.IsEmpty = function(){
    return itens.length === 0
} 
this.clear = function(){
    itens = []
}
this.size = function(){
    return itens.length
}
this.print = function(){
    console.log(itens.toString())
}

}

var pilha = new Stack()

pilha.push('alvorada 10:30')
pilha.push('pref 12:30')
pilha.push('preferida 14:30')

console.log(" o ultimo item é: " + pilha.peek())
console.log(" o tamanho da pilha é: " + pilha.size())
console.log(" a pilha esta vazia? " + pilha.IsEmpty())

pilha.print()