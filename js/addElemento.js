var block = {}

block.id = 0
function criarId() {
    block.id += 1
    return block.id
}

block.codeAddId = ''
function meuId(_elemento) {
    if (_elemento.id.includes('add ')) {
        _id = _elemento.id.replace('add ', '')
        block.codeAddId = _id   
    }
    if (_elemento.id.includes('code ')) {
        _id = _elemento.id.replace('code ', '')
        block.codeAddId = _id   
    }
    if (_elemento.id.includes('btn ')) {
        _id = _elemento.id.replace('btn ', '')
        block.codeAddId = _id   
    }
}

block.code_0 = `

<div style="display: grid; width: 100px;">
    <button class="btn000" style="width: unset; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;">Block</button>
    <button style="border: none;" onclick="meuId(this)" id="add 0">+</button>
    </div>
<div id="code 0">
<div>

`
setCode(block.code_0, 'divCode')

function setCode(_code, _id) {
    document.getElementById(_id).innerHTML += _code
}