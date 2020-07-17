// assignment no 1 feetToMile converter

function feetToMile(feet){

    if(feet<1){
        return 'Please give a positive value'
    }

    var mile = feet * 0.000189394
    return mile

}
// var feet = feetToMile(10000)
// console.log(feet)






//assignment no 2 woodCalculator
function woodCalculator(chair,table,bed){

    if(chair,table,bed < 1){
        return 'pleas give psitive value'
    }


    var forChair = chair*1
    var forTable = table*3
    var forBed = bed*5
    var totalCubicFeet = forChair + forTable + forBed
    return totalCubicFeet

}
// var result = woodCalculator(5,5,1)
// console.log(result)






// assignment no 3 brickCalculation

function brickCalculator(floor){


        if(floor == 0){
            return 'Please Give a Positive input'
        }
        else if(floor <= 0){
            return 'Please Give a Valid input'
        }

        else if(floor <= 10){
            var feet = 0
            for(var i=1; i<=floor; i++){
                feet = feet + 15
            }
            return feet*1000
        }
        else if(floor<=20){
            var feet = 150
            for(var i=11; i<=floor; i++){
                feet = feet + 12
            }
            return feet*1000
        }      
        else if(floor>20) {
            var feet = 270
            for(var i=21; i<=floor; i++){
                feet = feet + 10

            }
            return feet * 1000 
        }    
}
// var noOfFloor = brickCalculator(-8)
// console.log('Total eit you need =',noOfFloor)





//assignment no 4 tinyFriend

function tinyFriend(string){
    var firstNameLength = Infinity

    for(var i=0; i < string.length; i++){
        var nameLength = string[i].length
       
        
        // trying this extra, for bonus mark
        if(string[i].length < 1 || string == "" || string == " "){
            return ' Your array list is empty'
        }  
        // end this session
        
        


        if(nameLength < firstNameLength){
            firstNameLength = string[i].length
            var tinyName = string[i]
        }
    }
    return tinyName
}
// var friends = ["dadf","adf","e"];
// console.log(tinyFriend(friends));