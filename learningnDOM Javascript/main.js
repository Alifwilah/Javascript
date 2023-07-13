const btn1 = document.getElementById('btn1')


const text = 'klik 1'
btn1.textContent = text
const body = document.body

btn1.style.border = 'none'
btn1.style.padding = '10px'
btn1.style.fontSize = '20px'
btn1.style.background = 'cyan'

const p = document.createElement('p')
p.textContent = 'halo semua'

function gantiWarna(){
    btn1.style.background = 'red'
}

function gantiText(){
    btn1.textContent = 'halo'
    p.textContent
    body.append(p)

}

function kembali(){
    btn1.textContent = text
    p.style.color = 'red'
    body.append(p)
}