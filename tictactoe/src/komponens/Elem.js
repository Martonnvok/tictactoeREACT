import "./Elem.css";
function Elem(props) {

    function kattintas() {
        console.log("Szia")
        props.kattintas("Gratulálok, rá tudtál kattintani az x-re")
    }

    return (<div className="elem" onClick={kattintas}>
        {props.ertek}
    </div>)

}
export default Elem;


