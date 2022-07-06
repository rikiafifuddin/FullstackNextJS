import db from "../../../libs/db"

export default async function handler(req, res){

    if (req.method !== 'DELETE') return res.status(405).end();
    
    const {id} = req.query;
    const deleteUser = await db('posts').where({ id }).delete();
    
    res.status(200);
    res.json({
        message: 'Success Delete',
    })
}