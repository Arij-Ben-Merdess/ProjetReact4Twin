
function Form(props) {
    return ( <div>
        <label> { props.label } </label>
        <input type="text" name={props.label}/>
        
    </div> );
}

export default Form;