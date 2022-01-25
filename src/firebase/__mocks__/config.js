const user = {
    idUser: '00001',
    nameUser: 'Alejandra',
    emailUser: 'ale@gmail.com',
    photoURL: 'htppp.mi-foto.png',
    frontPageURL: 'wwww.ale.com',
    interests: 'me gusta pasear',
    location: 'Lima',
    socialNetwork: 'redes sociales'

};
export const setDoc = jest.fn((documents, values) => Promise.resolve(values));
export const doc = jest.fn((db, collection, docid) => Promise.resolve({}));
export const db = {};
export const addDoc = jest.fn((documents, values) => (values));
export const collection = jest.fn();
export const getDoc = jest.fn((documents) => Promise.resolve({ user }));
export const updateDoc = jest.fn((documents, values) => Promise.resolve(values));
export const arrayUnion = {};


//const getUser = async(id) => await getDoc(doc(db, "users", id));
/* idUser,
nameUser,
emailUser,
photoURL: photo,
frontPageURL: frontPageURL,
interests: interests,
location: location,
socialNetwork: socialNetwork */