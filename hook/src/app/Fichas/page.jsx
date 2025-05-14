import User from '@/components/User/user';
import './page.css'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Ficha() {
    return (
        <>
        <div className="container w-100 d-flex justify-content-center align-items-center m-5">
        <h2>Ficha Técnica</h2>
        </div>
            

            <div className="container">
                <div className="row">


                    <div className="col-md-6  d-flex justify-content-center align-items-center">
                        <User

                        />
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <User

                        />
                    </div>
                </div>

                <div className="row">


                    <div className="col-md-6  d-flex justify-content-center align-items-center">
                        <User

                        />
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <User

                        />
                    </div>
                </div>

                <div className="row">


                    <div className="col-md-6  d-flex justify-content-center align-items-center">
                        <User

                        />
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <User

                        />
                    </div>
                </div>
               
            </div>

        </>
    )
}