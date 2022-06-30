let  _headerArray=new WeakMap();
let _rowsArray=new WeakMap()
$(function() {
   
    class Table{
        constructor(headerArray){
            _headerArray.set(this,headerArray)
        }

        get headerArray(){
            _headerArray.get(this);
        }
        get rowsArray(){
            _rowsArray.get(this);
        }
        
    }

})