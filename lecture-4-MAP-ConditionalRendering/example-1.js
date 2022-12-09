// how to map over an array of objects and render a list of components

const family = [
{id: 1, name: "Murat"},
{id: 2, name:"Sibel"},
{id: 3, name:"Tarik"},
{id: 4, name:"Zeynep"},
{id: 5, name:"Abdullah"},
{id: 6, name:"Nihat"},
{id: 7, name: "Sedat"}
]

function ExampleApp() {
    return (
        <div>
            <ul>
                {family.map((elem) => {
                    // console.log("inside-map-cb", elem)

                    return (
                        <div key={elem.id} className="person">
                            <span>id = {elem.id} {elem.name}</span>
                            <span>{elem.job}</span>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
