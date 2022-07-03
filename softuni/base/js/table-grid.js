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
                    .attr('type','button').attr('value',"Add row")
                    .attr('id','add-row').appendTo('#cell-inputs-wrapper');
                }else{
                    this.headerArray.push(cellValue);
                    $('table tbody tr:first-child').append('<th>'+cellValue+'</th>');
                    $('<input></input>')
                    .attr('type','text')
                    .attr('placeholder',cellValue)
                    .attr('id',(this.headerArray.length-1))
                    .insertBefore('#add-row');
                }

        }
        addRow(){
            let row=[];
            $('table tbody').append('<tr></tr>');
            $('.cellInputsWrapper input[type=text]').each(function(index,value){
                let inputValue=value.value;
                row.push(inputValue);
                $('table tbody tr:last-child').append('<td>'+inputValue+'</td>');
            })
            this.rowsArray.push(row);
        }   


    }

    class TableEvents{
        constructor(){

        }
        listenNewHeaderButton(table){
            $('#add-header-btn').on('click',function(){
                let cellValue;
                cellValue=$('#headerCellName').val();
                table.addHeaderCell(cellValue)
                b.listenNewRowButton(a);
                
            })
        }

        listenNewRowButton(table){
            $('#add-row').on('click',function(){
               table.addRow();
                
            })
        }
    }
let a=new Table([]);
let b=new TableEvents();
b.listenNewHeaderButton(a);


})