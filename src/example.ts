
const tsStr = '22';
const tsNum = 2;

const result = +tsStr - tsNum; //?

type maxAliasUnioType = string | number | null | undefined | boolean | symbol | void | bigint | object | [];

// about generic in TS:
type TsArr = (number | string);

const tsArr: TsArr[] = [1,2,3];
// absolute identity ↑↓
const tsArr2: Array<TsArr> = [1,2,3,4,5];


// about taple in TS:
const tsNextArr: [string, number] = ['1',2];
const [a,b] = tsNextArr;
console.log(a, typeof a); //1 //string
console.log(b, typeof b); //2 //number