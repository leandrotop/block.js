block._var_code = `
<div style="display: grid; width: 300px;" id="block ID">
    <button class="btn001" style="border-radius: 0px; border-bottom-right-radius: 5px; border-top-right-radius: 5px;">
    var ID
    <input style="width: 100px;" type="text" value="" id="dado 1 ID">
     = 
    <input style="width: 100px;" type="text" value="" id="dado 2 ID">
    </button>
    <button style="border: none; width: 100px;" onclick="meuId(this)" id="add ID">+</button>
</div>
<div id="code ID">
</div>
`
block._var_script = 'var 1 block ID = 2 block ID'
block._var_dado1_ = '1 block ID'
block._var_dado2_ = '2 block ID'
function criarCodeVar() {
    _meuId = criarId()
    block['remove'+_meuId] = 'code '+block.codeAddId
    _code = block._var_code.replace(/ID/g, _meuId)
    setCode(_code, 'code '+block.codeAddId)
    block.codeAddId = ''
}