function example() {
    let input = read()
    if (input.length === 0) {
        print("Keine Eingabe vorhanden...")
    } else {
        print(input)
    }
}

function aufgabe_01() {
print("Hello World")

}


function aufgabe_01() {
    let numRead = parseInt(read())
    let num = 15

    // implement HERE

if (numRead < num) {
print ("Die gesuchte Zahl ist grösser")

} else if (numRead > num){

    print ("Die gesuchte Zahl ist kleiner")
} else {
print("Hurrah!!!")
}

}
function aufgabe_02() {
    // Obergrenze von Eingabe auslesen
    let upperBound = parseInt(read())
    print("Zähle bis " + upperBound)

    // Zähle von 0 bis zur Obergrenze
    for ( let i = 0; i < upperBound; i= i+1 ) {
      print( i )  
    }
}

function aufgabe_03() {
// Obergrenze von Eingabe auslesen
let upperBound = parseInt(read())
print("Zähle bis " + upperBound)
for ( let n = 0; n < upperBound; n++ ) {
    print( n*2  )  

}
}

function aufgabe_04() {
//Obergrenze von Eingabe auslesen
let upperBound = parseInt(read())
print("Zähle bis " + upperBound)
for ( let n = 0; n < upperBound; n = n ) {
    print( n+2 )  

}

}

