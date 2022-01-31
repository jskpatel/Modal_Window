import { useState } from "react";
import Modal from "./modal";

const ModalWindow = () => {

    const [show, setShow] = useState(false)
    const openModal = () => setShow(true)
    const closeModal = () => setShow(false)

    return <>
        <div className="container">

            <div className="text-center">
                <h1 className="mt-5">Modal Window !!</h1>
                <span class="btn btn-info btn-lg mt-5" onClick={openModal}>Click Me !!</span>
            </div>

        </div>

        <Modal closeModal={closeModal} show={show} />
    </>;
}

export default ModalWindow;