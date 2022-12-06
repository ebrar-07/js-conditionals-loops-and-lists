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
for ( let n = 0; n <= (upperBound/ 2); n++ ) {
    print( n*2 )  

}

}

function aufgabe_05() {
    //Obergrenze von Eingabe auslesen
    let upperBound = parseInt(read())
    print("Zähle bis " + upperBound)
    for ( let n = 0; n < (upperBound/ 2); n++ ) {
        print( n*2  + 1)  
    
    }
    
    }

    function aufgabe_06() {
        let start=  parseInt(read())
        for ( let i = start; i >= 0; i-- ) {
            print(i)  
        
        }
        
    }


        function example_while() {
            let numRead = parseInt(read())
            let origInput = numRead
            let num = 5
            let count = 0
        
            while (numRead >= num) {
                numRead = numRead - num
                count++
            }
        
            print(`${origInput} / ${num} = ${count} mit Rest ${numRead}`)
        }
         



        function example_primes() {
            // Liste der Primzahlen

           let primes = [2, 3, 5, 7, 11, 13, 17, 19]
                    //   0  1  2  3  4   5   6   7

                    print (primes [3])
                    
                    for (let i=0; i < primes.length; i++) {
                    print( primes[i] )
            
            //print ( primes[7])  ohne i würde es nur 7 angeben, aber so zuerst 7 dann alle restlichen zahlen. 

                    }
        }