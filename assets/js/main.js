let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

console.log(checkNumber);

console.log('-------------------------------------------------------');

checkNumber.forEach((item, index, arr) => {
    console.log('Index : ', index, 'value :', item);
    if (item % 3 === 0) {
        console.log('Index : ', index, 'value :', item, ' Is divisible by 3 so we will add 100 to it');
        checkNumber[index] = item + 100;
        console.log('Index : ', index, 'New value :', checkNumber[index], ' 100 was added');
    }
}
);

console.log('-------------------------------------------------------');

console.log(checkNumber);