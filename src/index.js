const columns = ['name','count','price'];
const data = [
   {name: 'Хлеб',count: 12, price :14.99},
   {name: 'Молоко', count: 3, price: 3.2},
   {name: 'Сыр', count: 1, price: 10},
   {name: 'Вода', count: 2, price: 5.5},
]
const textTable = createTextTable(columns, data);

console.log(textTable);

const createTextTable = (columns, data) => {
   let columnMaxLength = [];
   for (let i = 0; i < columns.length; i++) {
     columnMaxLength[i] = columns[i].length;
   }
   for (let i = 0; i < data.length; i++) {
     for (let j = 0; j < columns.length; j++) {
       if (data[i][columns[j]].toString().length > columnMaxLength[j]) {
         columnMaxLength[j] = data[i][columns[j]].toString().length;
       }
     }
   }
 
   let table = '';
 
  
   table += box.boxDrawingsLeft;
   for (let i = 0; i < columns.length; i++) {
     table += ' '.repeat(columnMaxLength[i] - columns[i].length) + columns[i];
     if (i !== columns.length - 1) {
       table += box.boxDrawingsVertical;
     }
   }
   table += box.boxDrawingsRight + '\n';
 
   
   table += box.boxDrawingsDownHorizontal;
   for (let i = 0; i < columns.length; i++) {
     table += box.boxDrawingsHorizontal.repeat(columnMaxLength[i]);
     if (i !== columns.length - 1) {
       table += box.boxDrawingsVerticalHorizontal;
     }
   }
   table += box.boxDrawingsDownHorizontal + '\n';
 
  
   for (let i = 0; i < data.length; i++) {
     table += box.boxDrawingsVertical;
     for (let j = 0; j < columns.length; j++) {
       let value = data[i][columns[j]];
       if (typeof value === 'number') {
         table += ' '.repeat(columnMaxLength[j] - value.toString().length) + value.toFixed(2);
       } else {
         table += ' '.repeat(columnMaxLength[j] - value.length) + value;
       }
       if (j !== columns.length - 1) {
         table += box.boxDrawingsVertical;
       }
     }
     table += box.boxDrawingsVertical + '\n';
   }

table += box.boxDrawingsUpHorizontal;
for (let i = 0; i < columns.length; i++) {
  table += box.boxDrawingsHorizontal.repeat(columnMaxLength[i]);
  if (i !== columns.length - 1) {
    table += box.boxDrawingsUpHorizontal;
  }
}
table += box.boxDrawingsUpHorizontal + '\n';

return table;
}; 
