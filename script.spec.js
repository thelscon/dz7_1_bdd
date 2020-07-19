describe ( 'Усложнить. Добавить тесты, проверяющие, что создана копия объекта и новый объект не является предыдущим.', function () {

    it ( 'Объект создан - assert.isObject(проверка на существование объекта);', function () {
        assert.isObject ( copyObject ) ;
    } ) ;

    it ( 'Не передан объект для копирования - assert.isUndefined (возвращает Undefined);', function () {
        assert.isUndefined ( copyObjectFunction () ) ;
    } ) ;

    it ( 'Новый объект не является предыдущим - assert.notEqual (проверка на неравенство);' , function () {
        assert.notEqual ( originalObject, copyObject ) ;
    } ) ;
} ) ;