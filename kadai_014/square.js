//関数を定義する
const square = (num) => {
    const result = num * num;
    return result; //戻したいデータをセットする
}

//関数の呼び出し、受け取る
let number = square(10); //10を引数で渡して2乗のデータを受け取る
console.log(number);