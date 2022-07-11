document.getElementById('inputCep').addEventListener('keypress', function(e){ 
    if(e.key == 'Enter'){
        search()
    }
 },false);
 document.getElementById('buttonSubmit').addEventListener('click',search)

const sectionResult = document.getElementById('sectionResult')

let pStreet = document.getElementById('street')
let pDistrict = document.getElementById('district')
let pCity = document.getElementById('city')
let pState = document.getElementById('state')

async function search(){
 const cep = document.getElementById('inputCep').value;

    if(cep.length !== 8){
        alert('CEP Inválido!');   
    } 

    const urlViaCep = `https://viacep.com.br/ws/${cep}/json`;
    const data = await fetch(urlViaCep);
    const address = await data.json();
    ShowForm(address)

}

async function ShowForm(address){
    const street =  address.logradouro
    const state =  address.uf
    const city =  address.localidade
    const district =  address.bairro

    pStreet.innerHTML = `<span>Lograduro:</span> ${street}`
    pDistrict.innerHTML = `<span>Bairro:</span> ${district}`
    pCity.innerHTML = `<span>Cidade:</span> ${city}`
    pState.innerHTML = `<span>Estado:</span> ${state}`
    sectionResult.style.display = 'flex'
    
}

