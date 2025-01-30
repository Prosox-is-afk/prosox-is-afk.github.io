function handleForm(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupération des données du formulaire
    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value; // Toujours récupéré, mais pas utilisé dans le mailto
    const message = document.getElementById('message').value;

    // Adresse destinataire (fixée à votre email)
    const recipient = "pierreburnier07@gmail.com";

    // Construction du lien mailto
    const subject = encodeURIComponent(`Message de ${prenom} ${nom}`);
    const body = encodeURIComponent(`Bonjour,\n\n${message}\n\nCordialement,\n${prenom} ${nom}\n${email}`);
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Ouverture de l'application de messagerie
    window.location.href = mailtoLink;
}
