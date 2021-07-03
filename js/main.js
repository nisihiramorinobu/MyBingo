'use strict';

{
 
  function createColumn(col) {
    const source = [];
    for ( let i = 0; i < 15; i++) {
      source[i] = i + 1 + col * 15; 
    }
    const column = [];
    for ( let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    return column;  
  }

  function createColumns () {
    const columns = [];
    for(let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;               //内部設定だから外へ返す
  }

  // console.table(columns);

  // function createBingo(columns) {
  //   const bingo = [];
  //   for (let row = 0; row < 5; row++) {
  //     bingo[row] = [];
  //     for(let col = 0; col < 5; col++) {
  //       bingo[row][col] = columns[col][row];
  //     }
  //   }
  //         // console.table(bingo);
  //   return bingo;                         //内部設定だから外へ返す
  // }

  function renderBingo(columns) {
    for(let row = 0; row <5; row++) {
      const tr = document.createElement('tr');       // <tr></tr> ができる
      for(let col = 0; col < 5; col++) {
        const td = document.createElement('td');     //　<td></td> ができる　これはfor出るとなくなる
        // console.log(td);
        td.textContent = columns[col][row];　　　　　// <td>値</td> 値が入る
        tr.appendChild(td);                     // tr>td>値</td></tr>   5回繰り返しtr              
        // console.log(tr);
    
      }
      document.querySelector('tbody').appendChild(tr);  //trを <tbody></tbody>に追加
    }
  }

  const columns = createColumns ();
  renderBingo(columns);
}