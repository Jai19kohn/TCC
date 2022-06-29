function ageCheck() {
    let currentYear = 2022;
    var birthyear = Number(document.getElementById("year").value);
    var yearChecked = currentYear - birthyear;

    if (yearChecked > 18)
    {
        alert('Cadastro concluido: Seja Bem-Vindo!');
        window.location.href = "https://www.youtube.com/";
    }
    else {
        alert('Você é de menor! e seu acesso foi bloqueado');
    }

}