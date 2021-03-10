// simple declaration
console.log("array=[]");
const numbers=[1,2,3,4];
console.log(numbers);

//new Array() 

console.log("array= new Array()");

const moreNumbers= new Array(1,2,3,4,5);
console.log(moreNumbers);

const names=new Array("azim","rian","aamir");
console.log(names);

// const moreNumbers=new Array(5)    single parameter not allowed as it makes itself the length

//Array.of();
console.log("array=Array.of()");
const num=Array.of(1,2,3);
console.log("array.of()",num);

const n=Array.of(1)
console.log(n);


//Array.from()
console.log("Array.from() for iterables");
const arraylist=Array.from("Azim");

console.log(arraylist);

const listItems=document.querySelectorAll('li');
console.log(listItems);

const arrayItems= Array.from(listItems);

console.log(arrayItems);

const hobbies=['cooking','playing','reading'];
console.log(hobbies);

const mix=[30,'max',{moreDetails:[]}];

console.log(mix[1]);

const twoD=[[1,2,3,4],[5,6,7,8]];

for(const data of twoD){
    for(const dataPoints of data){
        console.log(dataPoints);
    }
}

const azimHobbies=['cooking','playing'];

azimHobbies.push('reading');
console.log(azimHobbies);
azimHobbies.unshift('coding');
console.log(azimHobbies);

azimHobbies.pop();
console.log(azimHobbies);
azimHobbies.shift();
console.log(azimHobbies);

azimHobbies[5]='coding';
console.log(azimHobbies);

// deleting from a particular place in array

azimHobbies.splice(0,0,'good coding');
console.log(azimHobbies);

// deleting from last

azimHobbies.splice(-1,1);
console.log(azimHobbies);


// upper limit is excluded in slice

const testResults=[10,-1,2,3,4,-10,5,6,7];

const resultCopy=testResults.slice(2);
console.log(testResults,resultCopy);



const resultCopy1=testResults.slice(-3,-1);
console.log(resultCopy1);

// creating a copy of array elements using concat

const storedResult=testResults.concat([1,1,1,1,1,1]);
console.log(storedResult);

// for getting the index of array elements is indexOf(),lastIndexOf()

console.log(testResults.indexOf(2));

console.log(testResults.lastIndexOf(-10));

// but for refrence values(objects) the index does not work   which gives -1 (error)

const Name=[{name:'max'},{name:'azim'}];
console.log(Name.indexOf({name:'azim'}));

// find()

const personData=[{name:'Azim'},{name:'Max'}];

const azim=personData.find((person,indx,persons)=>
{
    return person.name==="Azim";
});

console.log(azim);

// findIndex()

const maxInd=personData.findIndex((person,indx,persons)=>
{
    return person.name==='Max';
});

console.log(maxInd);

// includes() to find the element present in the array

const test=[1,2,3,4,5,-5];
console.log(test.includes(-5));
console.log(test.includes(-10));


//foreach() method for each element in an array

const prices=[1,2,3,4,5,6]
const tax=0.19;

const taxAdjustedPrice=[];

prices.forEach((price,idx,prices)=>{
const priceObj={indx:idx,taxAdjustedprice:price*(1+tax)};
taxAdjustedPrice.push(priceObj);
});

console.log(taxAdjustedPrice);

// map() function to access the elements in an array for refrence as a object

const price1=[1,2,3,4,5];
const tax1=1.5;

const newAdjust=price1.map((price,idx,price1)=>{
    const priceObj={index:idx,taxprice:(1+tax)*price};
    return priceObj;
});

console.log(newAdjust,price1);


// sorting using sort()

const arr=[10,9,8,7,6,5];

// const sortedPrice= arr.sort();

const sortedPrice=arr.sort((a,b)=>{
    if(a>b){
        return 1;
    }
    else if(a===b){
        return 0;
    }
    else{
        return -1;
    }
});

console.log(sortedPrice);

//sorting in reverse order

const arr1=[1,2,3,4,5];

const reversePrice=arr.sort((a,b)=>{
    if(a>b){
        return -1;
    }
    else if(a===b){
        return 0;
    }
    else{
        return 1;
    }
});

console.log(reversePrice);



// using filter() 

const priceArr=[6,7,8,5,10];

const filterArr=priceArr.filter((price,idx,priceArr)=>{
    return price>6;
});

console.log(priceArr);
console.log(filterArr);


// using => functions for shorter code and clean code 

const newArr=[1,2,3,4,5];

const filterNewArr=newArr.filter(p => p>2);

console.log(filterNewArr);


// using reduce() function for reducing code with 2 parameters

const sum=newArr.reduce((preValue,curValue)=>preValue+curValue,0);

console.log(sum);
