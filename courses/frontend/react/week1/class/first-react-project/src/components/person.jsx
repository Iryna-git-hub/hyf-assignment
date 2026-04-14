function Person() {
    const name = "Alex";
    const age = 18;
    let message = (age >= 18)? 'is an adult': 'is a minor';   

    return `${name} ${message}`;
}

export default Person;