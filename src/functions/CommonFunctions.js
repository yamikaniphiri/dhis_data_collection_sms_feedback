class CommonFunctions {
    getDate(){
        var today = new Date();
        var day = today.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        var month = (today.getMonth()+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}); 
        var year = today.getFullYear()
        return year+'-'+month+'-'+day
    }
    //split name
    splitName(name){
        let nameToSplit = name.split(" - ");
        return nameToSplit[nameToSplit.length -1];
    }
    
    camelCase (str){
        let  c =str.toLowerCase().split('_') 
        if(c.length == 1){
            return c[0]
        }
        else if(c.length == 2){
            return c[0]+(c[1].charAt(0).toUpperCase() + c[1].slice(1))
        }
        else{
            return c[0]+(c[1].charAt(0).toUpperCase() + c[1].slice(1))+(c[2].charAt(0).toUpperCase() + c[2].slice(1))
        }
    }
};
export default new CommonFunctions();