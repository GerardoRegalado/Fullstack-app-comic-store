const mongoose      =require("mongoose")
const NewComic      =require("../models/NewComicForSale")
const connectDB     =require("../config/db")

require("dotenv").config()

connectDB()

const readForFreeSeed = [

    {
        comicName:          "9/11 20th Anniversary Tribute: The Four Fives (2011)",
        volumeNumber:       1,
        published:          2021-09-08,
        writer:             "Joe Quesada",
        penciler:           "John Romita",
        coverArtist:        "NA",
        description:        "In honor and in remembrance of 9/11/01.",
        condition:          "New",
        shipping:           "Read for Free with GRR! Comics Account",
        studio:             "Marvel Studio",
        price:              1.99

    },

    {
        
        comicName:          "The Vitals: True EMS Stories (2021)",
        volumeNumber:        0,
        published:           2021-06-01,
        writer:             "Sean Ryan",
        penciler:           "Ze Carlos, Ramon Bachs, Ray-Anthony Height, J.L. Giles",
        coverArtist:        "Ze Carlos",
        description:        "Healthcare workers are on the frontlines during this difficult time. THE VITALS tells tales of some real heroes, the EMS teams, as they travel to high-risk environments in order to rescue those in urgent need.",
        condition:          "New",
        shipping:           "Read for Free with GRR! Comics Account",
        studio:             "Marvel Studio",
        price:              1.99

    },

    {
        
        comicName:          "X-men (2020)",
        volumeNumber:       1,
        published:          2020-07-15,
        writer:             "Tom Taylor, Jonathan Hickman",
        penciler:           "Pepe Larraz, Iban Coello",
        coverArtist:        "Pepe Larraz",
        description:        "FCBD is headlined by a brand new X-Men story by Jonathan Hickman and Pepe Larraz that will lead into a game-changing summer for all of X! Plus: a secret second story foreshadowing an upcoming epic tale by Tom Taylor and Iban Coello.",
        condition:          "New",
        shipping:           "Read for Free with GRR! Comics Account",
        studio:             "Marvel Studio",
        price:              1.99

    },

    {
        
        comicName:          "Spider-Man/Venom (2020)",
        volumeNumber:       1,
        published:          2020-07-22,
        writer:             "Ryan Stegman, Donny Cates, Jed Mackay",
        penciler:           "Patrick Gleason, Ryan Stegman",
        coverArtist:        "Ryan Stegman",
        description:        "Two exciting tales connected to the coming major storylines in Venom, Amazing Spider-Man and Black Cat from top creators Donny Cates, Ryan Stegman, Jed MacKay, Patrick Gleason and more!",
        condition:          "New",
        shipping:           "Read for Free with GRR! Comics Account",
        studio:             "Marvel Studio",
        price:              1.99

    },

    {
        
        comicName:          "The Amazing Spider-Man (2018)",
        volumeNumber:       1,
        published:          2018-07-11,
        writer:             "Nick Spencer",
        penciler:           "Ryan Ottley, Humberto Ramos",
        coverArtist:        "Ryan Ottley",
        description:        "An alien invasion hits New York City and the only one who can stop it is…Spider-Man?! And if even that's not enough, you'll see a new roommate, new love interests - and a new villain! Spider-Man goes back to basics courtesy of Nick Spencer (SECRET EMPIRE, SUPERIOR FOES OF SPIDER-MAN) and the Marvel debut of RYAN OTTLEY (Invincible)!",
        condition:          "New",
        shipping:           "Read for Free with GRR! Comics Account",
        studio:             "Marvel Studios",
        price:              1.99

    },


]

const readFree = async (data) => {

    try {
        const readForFree = await NewComic.create(data)
        console.log(readForFree)
        return mongoose.connection.close()

    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

readFree(readForFreeSeed)