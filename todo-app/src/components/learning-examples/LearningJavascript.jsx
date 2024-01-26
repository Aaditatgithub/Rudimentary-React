const Person = {
    name: 'Ranga Karanam',
    address: {
        street: 'Baker Street',
        City: 'London',
    },
    profiles: ['twitter','Linkedin','Instagram'],
    printProfile: ()=> {
        console.log(Person.profiles[0])
    }
}


export default function LearningJavascript(){
    return (
        <>
            <div>{Person.name}</div>
            <div>{Person.address.street}</div>
            <div>{Person.profiles[0]}</div>
        </>
    );
}