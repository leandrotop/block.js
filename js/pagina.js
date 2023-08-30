var divVariavel = document.getElementById('divVariavel')
    var divComparadores = document.getElementById('divComparadores')
    var divConsole = document.getElementById('divConsole')
    function divNone() {
        divVariavel.style.display = 'none'
        divComparadores.style.display = 'none'
        divConsole.style.display = 'none'
    }
    divNone()
    function openVariavel() {
        if (divVariavel.style.display=='block') {
            divNone()
        } else {
            divNone()
            divVariavel.style.display = 'block'   
        }
    }
    function openComparadores() {
        if (divComparadores.style.display=='block') {
            divNone()
        } else {
            divNone()
            divComparadores.style.display = 'block'   
        }
    }
    function openConsole() {
        if (divComparadores.style.display=='block') {
            divNone()
        } else {
            divNone()
            divComparadores.style.display = 'block'   
        }
    }
    function openConsole() {
        if (divConsole.style.display=='block') {
            divNone()
        } else {
            divNone()
            divConsole.style.display = 'block'   
        }
    }