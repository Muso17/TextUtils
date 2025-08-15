export default function Switch(props) {
   return( <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="switchCheckDefault"
      onClick={props.toggleMode}
    />
    <label className="form-check-label" htmlFor="switchCheckDefault">
      {props.btnText}
    </label>
   </div>
   )
 
}
