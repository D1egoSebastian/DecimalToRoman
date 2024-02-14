

function DecimalToRoman(number) {

        if(isNaN(number)){

                console.log("Error. please input a number, not letters.")
                return;
        }

    let finalnumber = number; 
    let answer = '';

    const romans = [
        { symbol: 'I', value: 1 },
        { symbol: 'IV', value: 4 },
        { symbol: 'V', value: 5 },
        { symbol: 'IX', value: 9 },
        { symbol: 'X', value: 10 },
        { symbol: 'XL', value: 40 },
        { symbol: 'L', value: 50 },
        { symbol: 'XC', value: 90 },
        { symbol: 'C', value: 100 },
        { symbol: 'CD', value: 400 },
        { symbol: 'D', value: 500 },
        { symbol: 'CM', value: 900 },
        { symbol: 'M', value: 1000 }
    ];

        for(let i=romans.length - 1; i >= 0; i--){

                const { symbol, value} = romans[i]
                while (finalnumber >= value) { 
                    
                        answer += symbol;
                        finalnumber -= value;
                }

                
        }

        return answer;
           
}

console.log("Your roman number is: " + (DecimalToRoman(15)))
console.log("Your roman number is: " + (DecimalToRoman(100)))
console.log("Your roman number is: " + (DecimalToRoman(140)))
console.log("Your roman number is: " + (DecimalToRoman(1500)))
console.log("Your roman number is: " + (DecimalToRoman('a')))


module.exports = DecimalToRoman;




