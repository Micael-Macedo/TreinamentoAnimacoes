const pageBox = document.querySelector('.page-box')
const btnNext = document.querySelector('.btn-next')
const btnBack = document.querySelector('.btn-back')
const loginTitle = document.querySelector('.logintTitle-text')
const checkPassword = document.querySelector('.check-password')
const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.input-password')
const userEmail = document.querySelector('.user-email')

btnNext.addEventListener('click', (e) =>{
    e.preventDefault();
    pageBox.classList.add('active-pass')
    loginTitle.innerHTML = 'Welcome'
    userEmail.innerHTML = inputEmail.value
})
btnBack.addEventListener('click', (e) =>{
    e.preventDefault();
    pageBox.classList.remove('active-pass')
    loginTitle.innerHTML = 'Login'
    userEmail.innerHTML = 'Please login to use the plataform'
})
checkPassword.onchange = () =>{
    if(checkPassword.checked){
        inputPassword.type = 'text'
    }else{
        inputPassword.type = 'password'
    }
}