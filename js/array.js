var avgTemp = []

avgTemp[0] = 31.9
avgTemp[1] = 30.9

console.log(avgTemp[1])


var daysOfWeek = ['sunday', 'monday','tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

for (var i = 0; i < daysOfWeek.length; i++){
    console.log(daysOfWeek[i])
}

console.log(daysOfWeek.length)

var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for(var i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

console.log(fibonacci)