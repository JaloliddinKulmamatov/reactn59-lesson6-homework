//1

// function centuryFromYear(year) {
//    let century = Math.ceil(year / 100);
//    return century;
// }


// const res = centuryFromYear(1950);

// console.log(res);

//2

// const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "Semptember",
//     "October",
//     "November",
//     "December"
// ]

// function monthName(monthIndex) {
//     return months[monthIndex - 1]
// }

//3

// function afterNMonths(year , month) {
//     return year + (Math.floor(month / 12))
// }

// console.log(afterNMonths(1890,31));

// console.log(monthName(12));

//4

// function formatDate(oo,ss,yyyy) {
//     let newArr = [yyyy,ss,oo] 
//     return newArr.join("").toString()
// }

// console.log(formatDate(11,12,2019));

//5

// function longestTime(h,m,s) {
//     let resM = m / 60;
//     let resS = s / 3600 
//     let biggest =  Math.max(h,resM,resS)
//     if (biggest == resM) {
//         return m
//     } else if(biggest == resS){
//         return s
//     }else {
//        return h 
//     }
// }

// console.log(longestTime(2, 300, 15000));