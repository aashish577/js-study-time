const coding = ['js', 'ruby', 'python', 'cpp']

coding.forEach( function (item){
    //console.log(item);
    
} )

coding.forEach ( (cal) => {
    //console.log(cal);
    
} )

function printMe (item){
    //console.log(item)
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
    
} )

const myCoding = [
    {
        languageName : 'javascript',
        languageFile : 'js'
    },
    {
        languageName : 'java',
        languageFile : 'java'
    },
    {
        languageName : 'python',
        languageFile : 'py'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFile);
    
} )