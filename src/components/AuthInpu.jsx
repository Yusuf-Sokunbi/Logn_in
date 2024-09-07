export  default function AuthInputs (){
    let submitted = true;
    let enteredEmail =true;
    const emailNotValid = submitted && !enteredEmail.includes('@');
    return(
        <>
        <div id="auth-inputs">
            <div className="controls">
            <p>
                <label htmlFor="">Email</label>
                <input type="email" style={{backgroundColor:emailNotValid ? 'red': 'blue'}} />
            </p>
            <p>
                <label htmlFor="">Password</label>
                <input type="password" />
            </p>
            </div>
            <div className="actions">
                <p className="text-button">Create a new account</p>
                <button className="button ">SIGN</button></div>
        </div>
        </>
    )
}