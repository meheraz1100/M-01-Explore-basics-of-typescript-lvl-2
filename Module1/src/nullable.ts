{

// nullable types / unknown type

const searchName = (value: string | null)=> {
    if(value){
        console.log('searching')
    }
    else{
        console.log('there is nothing to search');
    }
}

searchName(null);

// unknown typeof
const getSpeedInMeterPerSecond=(value:unknown)=>{
    if(typeof value === 'number'){
        const convertedSpeed = (value*1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`)
    }
    else if(typeof value === 'string'){
        const [result, unit] = value.split(' ')
        // console.log(result, unit);
        const convertedSpeed = (parseFloat(result)*1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`)
    }
    else{
        console.log('Wrong Input!!!');
    }
};

getSpeedInMeterPerSecond(null)



// never
const throwError = (msg: string): never => {
    throw new Error(msg);
}

throwError('error hoye gese')





















}