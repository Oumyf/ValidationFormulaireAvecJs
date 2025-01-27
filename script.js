document.getElementById('myform').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    let prenom = document.getElementById('prenom');
    let nom = document.getElementById('nom');
    let mail = document.getElementById('mail');
    let mdp = document.getElementById('mdp');

    let myregex = /^[a-zA-Z-\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (prenom.value.trim() === "") {
        document.getElementById('errorPrenom').textContent = "Le champ prénom est requis.";
        document.getElementById('errorPrenom').style.color = 'red';
        isValid = false;
    } else if (!myregex.test(prenom.value)) {
        document.getElementById('errorPrenom').textContent = "Le prénom ne peut contenir que des lettres.";
        document.getElementById('errorPrenom').style.color = 'red';
        isValid = false;
    } 
    else if (!myregex.test(prenom.value) || prenom.value.length < 3 || prenom.value.length > 15) {
        document.getElementById('errorPrenom').textContent = "Le champ prenom doit contenir entre 3 et 15 caractères et doit avoir des lettres seulement.";
        document.getElementById('errorPrenom').style.color = 'red';
        isValid = false;
    }
    else {
        document.getElementById('errorPrenom').textContent = "";
    }

    if (nom.value.trim() === "") {
        document.getElementById('errorNom').textContent = "Le champ nom est requis.";
        document.getElementById('errorNom').style.color = 'red';
        isValid = false;
    } 
    else if (!myregex.test(nom.value)) {
        document.getElementById('errorNom').textContent = "Le nom ne peut contenir que des lettres.";
        document.getElementById('errorNom').style.color = 'red';
        isValid = false;
    } 
    else if (!myregex.test(nom.value) || nom.value.length < 3 || nom.value.length > 15) {
        document.getElementById('errorPrenom').textContent = "Le champ nom doit contenir entre 3 et 15 caractères et doit avoir des lettres seulement.";
        document.getElementById('errorPrenom').style.color = 'red';
        isValid = false;
    }
    else {
        document.getElementById('errorNom').textContent = "";
    }

    if (mail.value.trim() === "") {
        document.getElementById('errorMail').textContent = "Le champ mail est requis.";
        document.getElementById('errorMail').style.color = 'red';
        isValid = false;
    } else if (!emailRegex.test(mail.value)) {
        document.getElementById('errorMail').textContent = "Veuillez entrer une adresse e-mail valide.";
        document.getElementById('errorMail').style.color = 'red';
        isValid = false;
    } 
    else {
        document.getElementById('errorMail').textContent = "";
    }

    if (mdp.value.trim() === "") {
        document.getElementById('errorMdp').textContent = "Le champ mot de passe est requis.";
        document.getElementById('errorMdp').style.color = 'red';
        isValid = false;
    } 
    else if (mdp.value.length < 8) {
        document.getElementById('errorMdp').textContent = "Le champ mot de passe doit contenir au moins 8 caractères";
        document.getElementById('errorMdp').style.color = 'red';
        isValid = false;
    }
    else {
        document.getElementById('errorMdp').textContent = "";
    }

    if (isValid) {
        document.getElementById('myform').style.display = 'none';
        document.getElementById('container').style.display = 'block';
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 2000);
    }
});
