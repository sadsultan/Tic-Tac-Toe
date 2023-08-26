import "./Modal.css";

type props = {
    message: string;
}

export default function Modal({message}: props) {
    return (
        <div className="bg-cover" id="cover">
        <div className="winner-display" id="winner-display">
            <p>{message}</p>
            <button>Okay</button>
        </div>
        </div>
    )
}