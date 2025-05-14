import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "@/components/Cards/card"


export default function Cartas() {
    return (
        <>
            <div className="title align-items-center justify-content-center d-flex my-4">
                <h1>Cartas à irmandade</h1>
            </div>

            <div className="cards container-fluid align-items-center justify-content-center d-grid">
                <div className="row">
                    <div className="col-md-4">
                        <Card
                            title={"Circular 404"}
                            link={"https://placehold.co/200x300"}
                            image={"https://placehold.co/300x200"}
                            className='cardst'
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={"Circular 404"}
                            link={"https://placehold.co/200x300"}
                            image={"https://placehold.co/300x200"}
                            className='cardst'
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={"Circular 404"}
                            link={"https://placehold.co/200x300"}
                            image={"https://placehold.co/300x200"}
                            className='cardst'
                        />
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-4">
                        <Card
                            title={"Circular 404"}
                            link={"https://placehold.co/200x300"}
                            image={"https://placehold.co/300x200"}
                            className='cardst'
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={"Circular 404"}
                            link={"https://placehold.co/200x300"}
                            image={"https://placehold.co/300x200"}
                            className='cardst'
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={"Circular 404"}
                            link={"https://placehold.co/200x300"}
                            image={"https://placehold.co/300x200"}
                            className='cardst'
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <Card
                            title={"Circular 404"}
                            link={"https://placehold.co/200x300"}
                            image={"https://placehold.co/300x200"}
                            className='cardst'
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={"Circular 404"}
                            link={"https://placehold.co/200x300"}
                            image={"https://placehold.co/300x200"}
                            className='cardst'
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={"Circular 404"}
                            link={"https://placehold.co/200x300"}
                            image={"https://placehold.co/300x200"}
                            className='cardst'
                        />
                    </div>
                </div>



            </div>

        </>
    )
}