const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

export default async function createProject (req, res) {

  if(req.headers.cookie === `token=${process.env.UUID}`) {
    try {
      await prisma.projects.create({
      data: {
          slug: req.body.slug,
          title: req.body.title,
          body: req.body.body,
          tech: req.body.tech,
          images: req.body.images,
        },
      })
      res.status(200).json({message: 'Uploaded project'})
    } catch(err) {
      console.error(err)
      res.status(500).json({error: 'Please try again later'})
    }
  } else {
    res.status(400).json({error: 'User not logged in'})
  }
}