import Elem from "./Elem";

function Jatekter(props) {

    function kattintas(szoveg) {
        console.log(szoveg)
        props.kattintas(szoveg)
    }

    return (
        <div className="jatekter">
            {props.list.map((elem, index) => {
                return (<Elem ertek={elem} kattintas={kattintas} key={index} />)
            })}
        </div>
    );

}
export default Jatekter;