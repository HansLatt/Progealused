sisend = prompt("Palun sisesta positiivne temperatuur 1-60-ni")

function checkTemp() {
if (sisend <= 20)
    console.log("-1");
else if (sisend >= 21 && sisend <= 40)
    console.log("0");
else if (sisend >= 41 && sisend <= 60)
    console.log("1");
else
    console.log("ERROR")
}

checkTemp()