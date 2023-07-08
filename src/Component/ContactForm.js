import "./ContactFormStyles.css";
function contactform(){

    return(

        <div className="from-container">
            <h1>You can suggest other events and you can give feedbacks ! Send a message to us! </h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button >Send Message</button>
            </form>
        </div>
    )}
export default contactform;