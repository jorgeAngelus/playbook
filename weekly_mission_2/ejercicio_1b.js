const Twitter ={
    perfil: {
        username: "jorge0710",
        email: "jmc@outlook.com",
        siguiendo: 256,
        seguidores: 13,
        pais: "México",
        fechaunion: "julio 2016",
    },

    comentario: {
        texto:"follow me in ....",
        username: "jorge0710" 
    },

    trending_topic:{
        text:"#FirstLady",
        numTwits: "45 mil"
    },
    hashtag: "#IloveJS"
}

console.log(`Perfil: ${Twitter.perfil.username}`)
console.log(`Comentario: ${Twitter.comentario.texto}`)
console.log(`treding topic ${Twitter.trending_topic.text}`)
console.log(`#:  ${Twitter.hashtag}`)