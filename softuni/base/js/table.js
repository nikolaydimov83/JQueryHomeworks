$(function() {
let inputArray=[{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"},

{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},

{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}];
let _arrayOfObjects=new WeakMap();
class TableWritter{
    constructor(arrayOfObjects){
        _arrayOfObjects.set(this,arrayOfObjects);

    }
    get arrayOfObjects(){
        return _arrayOfObjects.get(this)
    }
    writeHeader(){
        $('<table><tbody><tr></tr></tbody></table>').appendTo('body')
        let arrayOfKeysAlreadyWritten=[];
        for (const key in this.arrayOfObjects) {
            $('table tbody').append('<tr>')
            if (Object.hasOwnProperty.call(this.arrayOfObjects, key)) {
                const element = this.arrayOfObjects[key];
                for (const key in element) {
                    if (Object.hasOwnProperty.call(element, key)) {
                        const headerCell = element[key];
                        let letIsKeyInTheTable=false;
                        $('th').each(function(rowKey,rowValue){
                            if (rowValue.innerText===key){
                                letIsKeyInTheTable=true
                            }
                        })
                        if(!letIsKeyInTheTable){
                            $('table tbody tr:first-child').append('<th>'+key+'</th>')
                            $('table tbody tr:last-child').append('<td>'+element[key]+'</td>')
                        }else{
                            $('table tbody tr:last-child').append('<td>'+element[key]+'</td>')
                        }
                    }
                }
                
            }
        }
    }
}
let a =new TableWritter(inputArray);
a.writeHeader();
});