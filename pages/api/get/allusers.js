import db from '../../../libs/db';
import jwt from 'jsonwebtoken';
import authorization from '../../../middlewares/authorization';

export default async function handler(req,res) {
    if (req.method !== 'GET') return res.status(405).end();
    
    const auth = await authorization(req, res);
    const allurers = await db('users');  
    
    res.status(200);
    res.json({
        message: 'Success',
        data: allurers
    })
}