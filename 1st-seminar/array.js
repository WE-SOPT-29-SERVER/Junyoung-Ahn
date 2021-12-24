let arr1 = [];
console.log(arr1);
console.log(typeof arr1);

let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(typeof arr2);

let arr3 = ["김우영", 1, 2, 3, null, { name: "wooyeong", age: 25 }];
console.log(arr3);
console.log(typeof arr3);

console.log("**** Array 기본 함수들을 알아보자 ****");
let arr = [1, 2, 3, 4];

console.log(`arr의 길이: ${arr.length}`);

arr.push("new item");
console.log("arr push:", arr);
arr.pop();
console.log("arr pop:", arr);

arr.unshift("first item");
console.log("arr unshift:", arr);
arr.shift();
console.log("arr shift:", arr);

console.log("arr.includes(4):", arr.includes(4));
console.log("arr.includes(1000):", arr.includes(1000));

console.log("arr.indexOf(4):", arr.indexOf(4));
console.log("arr.indexOf(100):", arr.indexOf(100));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let concatArr = arr1.concat(arr2);
console.log("arr1.concat(arr2):", concatArr);

let location = ["서울", "대전", "대구", "부산"];
console.log(location.join("-> "));

console.log(location.reverse().join("-> "));

let countries = ["Österreich", "Andorra", "Vietnam"];
console.log(countries.sort((a, b) => (a > b ? 1 : -1)));
console.log(
  countries.sort(function (a, b) {
    return a.localeCompare(b);
  }),
);
console.log(
  "오름차순 정렬:",
  concatArr.sort((a, b) => a - b),
);
console.log(
  "내림차순 정렬:",
  concatArr.sort(function (a, b) {
    return b - a;
  }),
);

let number = [100, 234, -125, 1, 23, -637, -123, 99, 2, 3, 4, 5];
let minusNumber = number.filter(item => item < 0);
console.log("minusNumber: ", minusNumber);

let countries = ["Österreich", "Andorra", "Vietnam", "Korea", "China"];
let countriesLengths = countries.map(item => item.length);
console.log("countriesLengths: ", countriesLengths);

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = number.reduce((previousValue, currentValue) => {
  console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`);
  return previousValue + currentValue;
});

console.log("sum = ", sum);

let serverPart = [
  "강한희",
  "고성용",
  "구건모",
  "권세훈",
  "김영권",
  "김은지",
  "김진욱",
];
let serverIndexStr = '서버파트 여러분 번호 한번 세겠습니다. "';
let serverPartMemberNameStr = '서버파트 여러분 이름 한번씩만 불러주세요~ "';

for (let item in serverPart) {
  serverIndexStr += item + "! ";
}
console.log(serverIndexStr);

for (let item of serverPart) {
  serverPartMemberNameStr += item + "! ";
}
console.log(serverPartMemberNameStr);

serverPart.forEach(item => {
  console.log(item);
});
