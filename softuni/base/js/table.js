$(function() {
let inputArray=[{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"},

{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},
{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family","Gear box":"Manual"},
{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"},

{"Gear box":"Auto","manufacturer":"Trabant","model":"Great","year":1978,"price":1000,"class":"Family"},
{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family","Gear box":"Auto","Brakes":"Disc"}];
let _arrayOfObjects=new WeakMap();
class TableWritter{
    constructor(arrayOfObjects){
        _arrayOfObjects.set(this,arrayOfObjects);

    }
    get arrayOfObjects(){
        return _arrayOfObjects.get(this)
    }
    findAllKeys(){
        let maxSize=0
        let keysList=[];
        for (const key in this.arrayOfObjects) {
            if (Object.hasOwnProperty.call(this.arrayOfObjects, key)) {
                const element = this.arrayOfObjects[key];
                if(maxSize<Object.keys(element).length){
                    maxSize=Object.keys(element).length;
                    keysList=Object.keys(element);
                }
            }
        }
        return keysList;
    }
    writeTable(){
        $('<table><tbody></tbody></table>').appendTo('body');
        for (let i=0;i<=this.arrayOfObjects.length; i++){
            $('<tr></tr>').appendTo('tbody');
        }
        
        let allKeys=this.findAllKeys();
        for (const i in allKeys) {
            if (Object.hasOwnProperty.call(allKeys, i)) {
                const element = allKeys[i];
                $('table tbody tr:first-child').append('<th>'+element+'</th>');
                for (const entryKey in this.arrayOfObjects) {
                    if (Object.hasOwnProperty.call(this.arrayOfObjects, entryKey)) {
                        const entry = this.arrayOfObjects[entryKey];
                        let rowNumber=Number(entryKey)+2;
                        if(entry[element]){
                            $('table tbody tr:nth-child('+rowNumber+')').append('<td>'+entry[element]+'</td>')
                        }else{
                            $('table tbody tr:nth-child('+rowNumber+')').append('<td>No Info</td>')
                        }
                    }
                }
            }
        }
    
    }
   
}
let a =new TableWritter(inputArray);

a.writeTable();
});