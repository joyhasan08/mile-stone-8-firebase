
import { Link } from "react-router-dom";


const TermsAndconditn = ({ setTerms }) => {

    const isAccepted = (e) => {
        const valueOfCheckBox = e.target.terms.value
        setTerms(valueOfCheckBox)
    }


    return (
        <div>
            <input onChange={isAccepted} type="checkbox" name="terms" id="check" /> <label htmlFor="check" className="text-black"> Accept Our <Link><span className=" text-blue-500" ><em>Terms and Condition </em></span></Link> </label>
        </div>
    );
};

export default TermsAndconditn;