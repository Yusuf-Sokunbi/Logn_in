export default function AuthInputs (){
    return(
        <>
        <div id="auth-inputs">
            <div className="controls">
            <p>
                <label htmlFor="">Email</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">Password</label>
                <input type="text" />
            </p>
            </div>
            <div className="actions">
                <p className="text-button">Create a new account</p>
                <button className="button ">SIGN</button></div>
        </div>
        </>
    )
}