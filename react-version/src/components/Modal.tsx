import "./Modal.css";

export default function Modal() {
    return (
        <div className="bg-cover" id="cover">
        <div className="winner-display" id="winner-display">
            <p>There are no winners this time! :( </p>
            <button>Okay</button>
        </div>
        </div>
    )
}