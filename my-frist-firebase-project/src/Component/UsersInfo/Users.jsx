
import { getAuth, signOut } from "firebase/auth";
import { app } from '../../helper/Firebase.init';
import { Link } from 'react-router-dom';

const Users = ({ data }) => {
    console.log(data);
    const auth = getAuth(app)

    const handelSingOut = () => {
        signOut(auth)
            .then(() => { console.log('sing out'); })
            .catch(() => { console.log('error happen'); })
    }
    return (
        <div>
            <div className="card mx-auto my-5 px-10 w-fit card-side bg-base-100 shadow-xl">
                <figure><img src={data.photoURL} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.displayName}</h2>
                    <p>{data.email}</p>
                    <div className="card-actions justify-end">
                        <Link to={``}><button onClick={handelSingOut} className="btn btn-warning">Sing Out</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

Users.propTypes = {

};

export default Users;