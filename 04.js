Function fn ( ){

        var n=0;

        function fn1 ( ){

               n++;

               console.log(n);

}

return fn1;

}

Var foo=fn( );

foo( );  //1

foo( );  //2

foo( );  //3