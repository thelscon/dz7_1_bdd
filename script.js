'use strict' ;

alert ( 'Реализовать функцию, которая создает копию передаваемого объекта и возвращает ее.' +
        `\nУсложнить. Добавить тесты, проверяющие, что создана копия объекта и новый объект не является предыдущим.` ) ;

let originalObject = {
    ['oneVariable'] : 'one' ,
    ['twoVariable'] : 'two' ,
    ['treeVariable'] : 'tree'
} ;

let copyObjectFunction = currentObject => {
    
    if ( typeof ( currentObject ) == 'object' ) {
        let copyObject = {} ;

        for ( let key in currentObject ) {
            copyObject [key] = currentObject [key]  ;
        }

        return copyObject ;                                 
    }
    else return ;                                           //Не передан объект для копирования - assert.isUndefined
} ;

let copyObject = copyObjectFunction ( originalObject ) ;    //Объект создан - assert.isObject 

console.log ( 'copyObject - ', copyObject  ) ;