const URL = `https://randomuser.me/api/`;

export const getUser = async () => {
    try {
        const response = await fetch(URL);
        if(!response.ok) throw new Error ('Network response was not OK');
        const randomUser = await response.json();
        const {results:[{dob:{age}, email, phone, name:{first, last},picture:{large:img}, location:{street:{number, name}}, login:{password}}]} = randomUser;
        return {phone, age, email, fullName:`${first} ${last}`, img, street:`${number}, ${name}`, password};
    } catch (error) {
        console.log(error);
    }
    
}