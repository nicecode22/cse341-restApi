
exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{
            professionalName: professionalName, 
            image: image, 
            primaryDescription: primaryDescription, 
            workDescription: workDescription,
            linkTitleText: linkTitleText,
            linkedInLink: linkedInLink,
            githubLink: gitHubLink
        }]
    });
};

//-----------------------POST------------------------------
exports.postPost = (req, res, next) => {
    const professionalName = req.body.professionalName;
    const image = req.body.image;
    const primaryDescription = req.body.primaryDescription;
    const workDescription = req.body.workDescription;
    const linkTitleText = req.body.linkTitleText;
    const linkedInLink = req.body.linkedInLink;
    const githubLink = req.body.githubLink;
    res.status(201).json({ //201 es para decir que se creo el recurso exitosamente
        message: 'Post created!',
        post: {id: new Date().toISOString(), professionalName: professionalName, image: image, primaryDescription: primaryDescription, workDescription: workDescription, linkTitleText: linkTitleText, linkedInLink: linkedInLink, githubLink: githubLink}
    });
};