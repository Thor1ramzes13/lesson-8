import { Router } from 'express'
const router = Router() 


router.get('/', (req, res) => { res.render('index', { title: 'The  Best Prison' }) })

export default router