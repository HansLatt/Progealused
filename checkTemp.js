sisend = prompt("Palun sisesta positiivne temperatuur 1-60-ni")

function checkTemp() {
if (sisend <= 20)
    return -1;
else if (sisend >= 21 && sisend <= 40)
    return 0;
else if (sisend >= 41 && sisend <= 60)
    return 1;
else
    return ("ERROR")
}

checkTemp()
