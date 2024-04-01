let array = [];

while (true) {
    let input = prompt("Matn kiriting (stop yozilganda tugatiladi):");

    if (input.toLowerCase() === 'stop') {
        break;
    }

    let command = input.split(',');

    if (command[0].trim() === 'add') {
        array.push(command[1].trim());
    } else if (command[0].trim() === 'del') {
        if (array.length > 0) {
            console.log("Oxirgi element o'chirildi:", array.pop());
        } else {
            console.log("Massiv bo'sh, o'chirish mumkin emas.");
        }
    } else {
        console.log("Noto'g'ri komanda! Qaytadan kiriting.");
    }
}

console.log("Natija massiv:", array);