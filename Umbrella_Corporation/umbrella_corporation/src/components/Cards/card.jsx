import "bootstrap/dist/css/bootstrap.min.css";
export default function Card({ username, name, email, city }) {

    return (
        <>
            
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title"><b>Username:</b> {username}</h5>
                        <p><b>Nome:</b> {name}</p>
                        <p className="card-text">
                            <b>Email:</b> {email}
                        </p>
                        <p className="card-text">
                            <b>Cidade:</b> {city}
                        </p>

                    </div>
                </div>
       
        </>
    )
}