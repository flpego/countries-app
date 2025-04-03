import "../styles/Utils.css";

const Subtitle = ({textStrong, text}) => {
  return (
    <p className="subtitle"><strong>{textStrong}</strong>{text}</p>
  )
}

export default Subtitle