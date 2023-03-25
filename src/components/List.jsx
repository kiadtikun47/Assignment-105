import Card from "./Card";

function List() {
    const person = [ 
    {Name:"Ping", job:"Student", hobby: "Listen to music"},
    {Name:"Mark", job:"Engineer", hobby: "Play fottball"},
    {Name:"Tawan", job:"Programmer", hobby: "Sing a song"},
    {Name:"John Smith", job:"Programmer", hobby: "Running"},
];
    return (
       <>
       {person.map((p) => {
        return <Card name={p.Name} job={p.job} hobby={p.hobby}></Card>
       }
       )}
       </>
    )
}
export default List;