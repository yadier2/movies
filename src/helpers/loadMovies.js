import { db } from '../firebase/firebase-config';

export const loadMovies = async (text) => {
    let Text = text.toLowerCase()
    const moviesSnap = await db.collection('movies').get();
    const movies = [];
    moviesSnap.forEach(snapHijo => {
        if (movies.length < 15) {
            console.log(snapHijo.data().original_title);
            if (snapHijo.data().original_title?.toLowerCase().includes(Text)) {
                movies.push({
                    ...snapHijo.data(),
                    id: snapHijo.id
                })
            }
        }

    })

    return movies;
}

export const loadMovie = async (id) => {
    try {
        let docRef = db.collection("movies").doc(id);
        let doc = await docRef.get()
        if (doc) {
            return doc.data()
        } else {
            console.log("No such document!");
        }
    } catch (err) {
        console.log("Error ==> ", err)
    }
}


let array = ['title', 'release_date', 'vote_average']
let latesDoc = null;
let a = 0
function random(min = 0, max = 2) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
if (!latesDoc) {
    a = random()
}

export const AllMovies = async () => {

    const ref = db.collection('movies')
       // .orderBy(array[a])
        .orderBy('popularity')
        .startAfter(latesDoc || 0)
        .limit(16)
    const data = await ref.get()

    const movies = []
    data.docs.forEach(doc => {
        movies.push(
            {
                ...doc.data(),
                id: doc.id
            }
        )
    })
    if (!data.empty) {
        latesDoc = data.docs[data.docs.length - 1]
    } else {
        //No se detendra latesDoc
    }
    return movies
}



