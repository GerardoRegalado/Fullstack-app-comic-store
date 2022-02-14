//  1.  AUTORIZHED AREAS FOR NO CURRENT USERS

exports.authAreas =  (req,res,next) => {      //esta madre se va anclar a las rutas 

    if(req.session.currentUser){

        res.redirect("home")
        return
    }

    next()


}

//  2.  PRIVATE AREAS FOR CURRENT

exports.privateAreas= (req,res,next) => {

    if(!req.session.currentUser){

        res.redirect("login")
        return
    }   

    next()

}

