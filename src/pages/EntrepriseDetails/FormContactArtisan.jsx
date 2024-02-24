import Button from "../../components/Button/Button";

const FormContactArtisan = (props) => {
  // Pour forcer l'envoie par mail du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const body = `${formData.get("message")}\n\nNom: ${name}`;
    const mailtoURL = `mailto:${props.email}?subject=${formData.get(
      "objet"
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoURL);
    form.reset();
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <div className="row m-3">
        <input
          className="px-2 my-2 rounded-4 form-text-color col-lg-6"
          type="text"
          name="name"
          placeholder="Nom"
          autoComplete="name"
          required
        />
        <input
          className="px-2 my-2 rounded-4 form-text-color col-lg-6"
          type="text"
          name="objet"
          placeholder="Objet"
          required
        />
        <textarea
          className="px-2 my-2 rounded-4 form-text-color"
          name="message"
          id="message"
          rows="10"
          placeholder="Votre message..."
          required
        ></textarea>
      </div>
      <div className="text-end my-3">
        <Button type="submit" buttonName="Envoyer" color="red" />
      </div>
    </form>
  );
};

export default FormContactArtisan;
