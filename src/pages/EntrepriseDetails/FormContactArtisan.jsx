import Button from "../../components/Button/Button";

const FormContactArtisan = (props) => {

  const handleSubmit = (e) => {
    alert("Votre message a bien été envoyé à l'artisan " + props.name + ".")
    e.preventDefault();
    const form = e.target;
    form.reset();
  };

  return (
    <form action="" method="post" 
    onSubmit={handleSubmit}
    >
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
