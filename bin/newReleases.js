const mongoose      =require("mongoose")
const NewComic      =require("../models/NewComicForSale")
const connectDB     =require("../config/db")

require("dotenv").config()

connectDB()

const newReleasesSeed = [

    {
        comicName:          "Marvel's Voices: Legacy (2022)",
        volumeNumber:       1,
        published:          2022-02-17,
        writer:             "Natacha Bustos, Victor Lavalle, Cody Ziglar",
        penciler:           "Natacha Bustos",
        coverArtist:        "Chris Cross",
        description:        "WE'VE DONE IT AGAIN! ANOTHER STAR-PACKED VOICES SPECIAL GRACES THE STANDS FOR BLACK HISTORY MONTH! Stormbreaker Natacha Bustos makes her writing debut with a gorgeous tale of Wakanda! Superstar novelist Victor LaValle writes Moon Girl like you've never seen her before! Jessica Jones and Cloak & Dagger TV writer J. Holtham explores the legacy of Sam Wilson, Captain America! Amazing Spider-Man scribe Cody Ziglar visits Marvel's black heroes through the ages in a celebration highlighting Luke Cage's 50th Anniversary! And there's so much more to come, including an incredible lineup of new and established artists. Marvel's Voices is the program for every fan - don't let this one pass you by!",
        condition:          "New",
        shipping:           "For free",
        studio:             "Marvel Studios",
        price:              5

    },
    
    {
        comicName:          "Edge of Spider-Verse: Facsimile Edition (2022)",
        volumeNumber:       2,
        published:          2022-02-09,
        writer:             "Jason Latour",
        penciler:           "Robbi Rodriguez",
        coverArtist:        "Robbi Rodriguez",
        description:        "GWEN STACY: SPIDER-WOMAN! In one universe, it wasn't Peter Parker bitten by the radioactive Spider, but Gwen Stacy! She's smart, charming and can lift a car-- Just don't tell her Police Chief father! How is she involved in Spider-Verse? Seeds of AMAZING SPIDER-MAN #9 are planted here!",
        condition:          "New",
        shipping:           "For free",
        studio:             "Marvel Studios",
        price:              5

    },

    {
        comicName:          "Hawkeye: Kate Bishop (2021)",
        volumeNumber:       4,
        published:          2022-02-09,
        writer:             "Marieke Nijkamp",
        penciler:           "Enid Balam",
        coverArtist:        "Jahnoy Lindsay",
        description:        "Kate Bishop hates the circus! Turns out that the Resort Chapiteau is being run by none other than the Circus of Crime as nothing more than a new and exciting way to part rich people from their money. Except the signet ring they stole from Susan unlocks her safe at Bishop Manor, which contains something way, way more dangerous than stacks of cash. Also, the resort is set to self-destruct, and the guests (and Susan and Lucky) are still inside. Worst. Vacation. Ever.",
        condition:          "New",
        shipping:           "For free",
        studio:             "Marvel Studio",
        price:              3

    },

    {
        comicName:          "Avengers (2018)",
        volumeNumber:       53,
        published:          2022-02-09,
        writer:             "Jason Aaron",
        penciler:           "Juan Frigeri",
        coverArtist:        "Javier Garron",
        description:        "ASSAULT ON AVENGERS MOUNTAIN! The Avengers' impenetrable headquarters is under attack, by the most supremely powerful version of Dr. Doom in existence and a wildly murderous Young Thanos, still wet with his mother's blood. The Black Panther fights to defend the mountain alongside his surprising new teammates, King Namor of Atlantis and Jane Foster, the mighty Valkyrie.",
        condition:          "New",
        shipping:           "For free",
        studio:             "Marvel Studios",
        price:              8

    },

    {
        comicName:          "Star Wars: Darth Vader (2022)",
        volumeNumber:       20,
        published:          2022-02-08,
        writer:             "Greg Pak",
        penciler:           "Raffaele Lenco",
        coverArtist:        "Ryan Stegman",
        description:        "THE QUEEN'S SHADOW RETURNS! Darth Vader continues his quest to destroy the agents of Crimson Dawn, abetted by an unlikely crew of heroes and assassins. But every twist in the tale gets thrown into question with the shocking return of SABÉ, handmaiden of Padmé Amidala! Who's the hero? Who's the villain? And will they choose chaos or order in the age of Crimson Reign?",
        condition:          "New",
        shipping:           "For free",
        studio:             "Other Collections",
        price:              5

    }

]


const newReleases = async (data) => {

    try {
        const newestReleases = await NewComic.create(data)
        console.log(newestReleases)
        return mongoose.connection.close()

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

newReleases(newReleasesSeed)


