

const p = document.getElementById('count')
const span = document.getElementById('step')
const incBtn = document.getElementById('inc')
const decrBtn = document.getElementById('decr')
const incStepBtn = document.getElementById('incStep')
const decrStepBtn = document.getElementById('decrStep')

let count = 0;
let step = 1;

p.innerText = count
span.innerText = step

const changeCount = (option) => {
    count = option === 'inc' ? count += step : count -= step
    p.innerText = count
}

incBtn.addEventListener('click', () => {
    changeCount('inc')
})

decrBtn.addEventListener('click', changeCount)

const changeStep = (option) => {
    if(step === 1 && option !== 'inc') return alert('positive')
    step = option === 'inc' ? step += 1 : step -= 1
    span.innerText = step

}

incStepBtn.addEventListener('click', () => {
    changeStep('inc')
})

decrStepBtn.addEventListener('click', changeStep)


//adaugam 2 butoane care schimba stepu
// step trebuie sa fie pozitiv


