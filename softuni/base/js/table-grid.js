let  _headerArray=new WeakMap();
let _rowsArray=new WeakMap()
$(function() {
   
    class Table{
        constructor(headerArray){
            _headerArray.set(this,headerArray);
            _rowsArray.set(this,[]);
        }

        get headerArray(){
            return _headerArray.get(this);
        }
        get rowsArray(){
            return _rowsArray.get(this);
        }
        addHeaderCell(cellValue){
            if(!this.headerArray[0]){
                this.headerArray.push(cellValue);
                $('<table><tbody><tr></tr></tbody></table>');
                $('table tbody tr:first-child').append('<th>'+cellValue+'</th>');
                $('<div></div>').addClass('cellInputsWrapper').attr('id', 'cell-inputs-wrapper').appendTo('body');
                $('<input></input>')
                    .attr('type','text')
                    .attr('placeholder',cellValue)
                    .attr('id',(this.headerArray.length-1))
                    .appendTo('#cell-inputs-wrapper');
                $('<input></input>')
                    .attr('type','button')
                    .attr('id','add-header-cell').appendTo('#cell-inputs-wrapper');
                }else{
                    this.rowsArray.push(cellValue);
                    $('table tbody tr:first-child').append('<th>'+cellValue+'</th>');
                    $('<input></input>')
                    .attr('type','text')
                    .attr('placeholder',cellValue)
                    .attr('id',(this.headerArray.length-1))
                    .appendTo('#cell-inputs-wrapper');
                }

        }
        addRow(rowValue){

            

        }   

    }

    class TableIteration{
        
    }
let a=new Table([]);
a.addHeaderCell('Niki');

})