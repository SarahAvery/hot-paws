import DisclaimerStyled from "./styles";

const Disclaimer = () => {
  return (
    <DisclaimerStyled data-testid="disclaimer-styled">
      <h2>Disclaimer</h2>
      <ul>
        <li>
          These temperatures are estimates and to be used as a <strong>guidelines</strong> only.
        </li>
        <li>
          <strong>Test:</strong> To find out if the ground is too hot for your dog to walk on, place the back of your
          hand on the surface for 10 seconds. If it’s too hot for your hand, it’s too hot for your dog’s paws.
        </li>
      </ul>
      <ul>
        <li>
          Skin destruction can occur in <strong>60 seconds</strong> at 51&deg;C or 125&deg;F.
        </li>
        <li>
          An egg can fry in <strong>5 seconds</strong> at 55&deg;C or131&deg;F.
        </li>
        <li>
          <strong>Suggestions:</strong>
          <br></br>Walk in the early morning, or late evening. Use dog shoes, or all-terrain boots. if you must walk
          during peak heat hours.
        </li>
      </ul>
    </DisclaimerStyled>
  );
};

export default Disclaimer;
