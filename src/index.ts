console.log("hello")

let dnum: number = 787
console.log(dnum)

let mynme: string = "trying typescript"
console.log(mynme)

const person: {
    name: string,
    age: number,
    gender: string,
    color:string
} = {
    name: "edwin",
    age: 67,
    gender: "male",
    color:"black"
}

console.log(person)

let myarry: (string | number | boolean | null )[] = [
    "edwin",
    "money",
    false,
    null
]

console.log(myarry)

const dfunction = ():number=>
{
    return 89;
}
console.log(dfunction())

const mycalpercent = (a:number) =>
{
    let cal = (a / 100) * 20
    return cal;
    
}

console.log(mycalpercent(200))




const selectran = (all:any) =>
{
    const inde = Math.floor(Math.random() * all.length)
    let result = all[inde]
    console.log(result)
}

selectran(["edwim", 9, 34])




