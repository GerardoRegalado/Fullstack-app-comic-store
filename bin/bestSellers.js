const mongoose      =require("mongoose")
const NewComic      =require("../models/NewComicForSale")
const connectDB     =require("../config/db")

require("dotenv").config()

connectDB()

const bestSellersSeed = [

    {
        comicName:          "Age of Ultron (2013)",
        volumeNumber:       1,
        published:          2013-03-06,
        writer:             "Brian Michael Bendis",
        penciler:           "N/A",
        coverArtist:        "Bryan Hitch",
        description:        "For years the heroes of the Marvel Universe have lived in fear that the artificial intelligence known as Ultron would one day evolve to fulfill its desire to wipe out all organic life and take over the Earth - that day has arrived. This massive 10-part Marvel Universe-spanning event is brought to you by Eisner award-winning writer Brian Michael Bendis and comics legend Bryan Hitch.",
        condition:          "New",
        shipping:           "For Free",
        studio:             "Marvel Studio",
        price:              8.99

    },

    {
        comicName:          "House of M (Trade Paperback)",
        volumeNumber:       1,
        published:          2021-04-21,
        writer:             "NA",
        penciler:           "NA",
        coverArtist:        "NA",
        description:        "Collects House of M (2005) #1-8. The Scarlet Witch is out of control, and the fate of the entire world is in her hands. Will Magneto help his daughter or use her powers to his own benefit? Starring the Astonishing X-Men and the New Avengers!",
        condition:          "New",
        shipping:           "For free",
        studio:             "Marvel Studios",
        price:              14.99

    },

    {
        comicName:          "X-men (1975) Giant Size",
        volumeNumber:       1,
        published:          1975-07-01,
        writer:             "Len Wein",
        penciler:           "Dave Cockrum",
        coverArtist:        "Dave Cockrum",
        description:        "Gil Kane and Dave Cockrum introduced the all-new X-Men team by having them rip straight through the book! Watch those claws Wolverine.",
        condition:          "New",
        shipping:           "For free",
        studio:             "Marvel Studios",
        price:              12.99

    },

    {
        comicName:          "Secret Wars (2015)",
        volumeNumber:       2,
        published:          2015-05-13,
        writer:             "Jonathan Hickman",
        penciler:           "Alex Ross",
        coverArtist:        "Alex Ross",
        description:        "When the Marvel Universe is gone, all that remains is Battleworld! Learn the secrets of this brave new realm in this special oversized issue!",
        condition:          "New",
        shipping:           "For free",
        studio:             "Marvel Studios",
        price:              12.99

    },

    {
        comicName:          "Deadpool Kills the Marvel Universe (2011)",
        volumeNumber:       1,
        published:          2012-08-01,
        writer:             "Cullen Bunn",
        penciler:           "Kaare Andrews",
        coverArtist:        "Kaare Andrews",
        description:        "- What if everthing you thought was funny about Deadpool...was actually just disturbing? - What if he decided to kill everyone and everything that makes up the Marvel Universe? - What if he actually pulled it off? Would that be FUN for you? - The Merc with a Mouth takes a turn for the twisted in a weekly horror comic like no other...",
        condition:          "New",
        shipping:           "for free",
        studio:             "Marvel Studios",
        price:              12.99

    },

]


const bestSellers = async (data) => {
    try {
        const bestSeller = await NewComic.create(data)
        console.log(bestSeller)
        return mongoose.connection.close()

    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

bestSellers(bestSellersSeed)