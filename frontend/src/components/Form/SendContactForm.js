export async function sendContactForm(formData) {

    const nom = formData.get("nom-prenom").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();


    if (!nom || !email || !message) {
        return {
            ok: false, text: "Veuillez remplir tous les champs."
        };
    }

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();


        if (data.success) {
            return { ok: true, text: "votre message a bien été envoyé !" };
        }
        return { ok: false, text: "L'envoi a échoué, veuillez réessayer." };

    } catch (error) {
        console.error(error);
        return {
            ok: false, text: "impossible de contacter le serveur"
        };
    }
}

