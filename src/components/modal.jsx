function Modal({closeModal, show}) {
    return <>
        <div id="myModal" className={`modal fade ${show === true ? 'show d-block' : 'd-none'}`} role="dialog">
            <div className="modal-dialog">

                <div className="modal-content text-center">
                    <div className="modal-header">
                        <span className="close btn" onClick={closeModal}>&times;</span>
                        <h4 className="modal-title">Modal Header</h4>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the modal.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" onClick={closeModal}>Close</button>
                    </div>
                </div>

            </div>
        </div>
        <div class={`modal-backdrop ${show === true ? 'd-block' : 'd-none'}`}></div>
    </>;
}

export default Modal;
