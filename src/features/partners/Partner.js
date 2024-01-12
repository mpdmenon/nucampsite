function Partner({ partner }) {
  if (partner) {
    // Destructuring the properties of partner
    const { image, name, description } = partner;

    // Render the partner details
    return (
      <>
        <img src={image} alt={name} style={{ width: "150px" }} />
        <div className="m-4">
          <h5 className="fw-bold">{name}</h5>
          {description}
        </div>
      </>
    );
  }

  // Return null if partner is falsy
  return null;
}

export default Partner;
