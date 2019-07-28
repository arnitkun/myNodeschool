// var replacedS = originalS.replace(/a/g, "b");

    console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
    
    function html(name, comment) {
        console.log(name, comment);
        // what goes here?
        // don't forget to return the escaped string!
    }
