let pronoun = ['He', 'She', 'They', 'It', 'We', 'You', 'I', 'Me', 'Them', 'Him'];
let adj = ['Happy', 'Big', 'Cold', 'Fast', 'Beautiful', 'Smart', 'Tall', 'Funny', 'Strong', 'Young']; 
let noun = ['House', 'Car', 'Book', 'Dog', 'School', 'Water', 'City', 'Friend', 'Food', 'Music'];
let extensiones = ['.com', '.net', '.us', '.io', '.es'];

for(let p =0; p < pronoun.length; p++) {
    for(let a =0; a < adj.length; a++) {
        for(let n =0; n < noun.length; n++) {
            for (let e =0; e < extensiones.length; e++) {
                console.log(pronoun[p] + adj[a] + noun[n] + extensiones[e])
            }
        }
    } 
}